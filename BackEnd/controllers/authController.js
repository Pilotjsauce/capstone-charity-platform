import User from "../models/userSchema.js"
import authUtilStuff from "../helpers/auth.js"
import jwt from 'jsonwebtoken';
import { invalidateToken } from "../helpers/authMiddleware.js";

export const logoutUser = (req, res) => {
  const token = req.cookies.token || req.headers['authorization'];
  if (token) {
    invalidateToken(token); // Invalidate the token
  }
  res.clearCookie("token"); // Clear the token cookie
  res.status(200).send({ message: "Logged out successfully" });
};

const test = (req, res) => {
  res.json("test is working");
};

//register endpoint
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, accountType, isAdmin } = req.body;

        if (!['user', 'charity'].includes(accountType)) {
            return res.status(400).json({ error: 'Invalid account type' });
        }

        if (!firstName || !lastName) {
            return res.json({ error: "Please enter your full name" });
        }

        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: "Email has already been used" });
        }

        const hashedPassword = await authUtilStuff.hashPassword(password);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            isAdmin,
        });

        return res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


//login EndPoint
const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;

        //check if the user exists

        const user = await User.findOne({email}); //the same way i checked in the register if they already exist
        if(!user) {
            return res.json({
                error: "no user found"
            })
        }

        //check if the password matches
        const match = await authUtilStuff.comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, firstName: user.firstName}, process.env.JWT_SECRET, {}, (err,token) => {
                if(err) throw err;
                res.cookie("token", token).json(user)
            } )
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err,user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}


export default { test, registerUser, loginUser, getProfile, logoutUser };

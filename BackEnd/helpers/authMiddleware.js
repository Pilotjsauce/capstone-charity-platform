import jwt from 'jsonwebtoken';

const tokenBlacklist = new Set();

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  if (tokenBlacklist.has(token)) {
    return res.status(401).send({ message: "Token is invalidated" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export const invalidateToken = (token) => {
  tokenBlacklist.add(token);
};
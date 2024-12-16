import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"; 
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerUser = async (event) => {
    event.preventDefault(); // Stops the page from refreshing
    const { firstName, lastName, email, password } = data;
    try {
      const { data } = await axios.post("/Register", {
        firstName,
        lastName,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        toast.success("Registration Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-screen justify-center h-screen items-center relative bg-[url(https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?cs=srgb&dl=pexels-julia-m-cameron-6994982.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex bg-white flex-col w-1/3 h-3/5 rounded-lg justify-center items-center rounded-xl border-black border-2 bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
        <form className="space-y-6" onSubmit={registerUser}>
          <label className="block text-sm/6 font-medium text-gray-900">
            First Name
          </label>
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="text"
            placeholder="First Name"
            value={data.firstName}
            onChange={(event) =>
              setData({ ...data, firstName: event.target.value })
            }
          />

          <label className="block text-sm/6 font-medium text-gray-900">
            Last Name
          </label>
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="text"
            placeholder="Last Name"
            value={data.lastName}
            onChange={(event) =>
              setData({ ...data, lastName: event.target.value })
            }
          />

          <label className="block text-sm/6 font-medium text-gray-900">
            Email
          </label>
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />

          <label className="block text-sm/6 font-medium text-gray-900">
            Password
          </label>
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
          />

          <button className="my-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 border-2 border-transparent hover:border-black">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Register
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import logo from "./pictures/logo.png";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/logout'); // Call server-side logout endpoint
      setUser(null);
      // Clear JWT from local storage
      localStorage.removeItem("authToken");
      // Optionally, clear other tokens or cookies if used
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/profile");
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, [setUser]);

  return (
    <div className="text-gray-700 font-mono ... font-bold">
      <div className="p-5 bg-gradient-to-br from-teal-300 to-lime-300 p-4"></div>
      <header className="bg-offWhite border-b">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="h-14 w-14" />
              <div className=" font-sans ... text-3xl font-bold text-teal-600">
                Hands Together
              </div>
            </Link>

            <nav className="hidden md:flex gap-6 text-sm text-gray-500">
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  isActive ? "underline text-teal-600" : "hover:text-gray-500"
                }
              >
                Browse Opportunities
              </NavLink>
              <NavLink
                to="/our-mission"
                className={({ isActive }) =>
                  isActive ? "underline text-teal-600" : "hover:text-gray-500"
                }
              >
                Our Mission
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "underline text-teal-600" : "hover:text-gray-500"
                }
              >
                Search
              </NavLink>
            </nav>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="font-sans ...">
                    Welcome, {user.firstName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-gray-200">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700">
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 hover:text-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

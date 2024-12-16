import { NavLink } from "react-router-dom";
import logo from "./pictures/logo.png";
import { Link } from "react-router-dom";

//I originally used <Link> until I read online and was able to reference some pre written code showing how you can use NavLink instead to show which page you are on. I thought this fit a little better because i'd like to be a bit more clear which page the user is currently on. Right now whichever route included in the header you access will be underlined. subtle but should be enough for now

//some code sourced from : https://www.hyperui.dev/components/marketing/headers

const Header = () => {
  return (
    <div className="text-gray-700 font-serif font-bold">
      <div className="p-5 bg-gradient-to-br from-teal-300 to-lime-300 p-4"></div>
      <header className="bg-offWhite border-b">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="h-14 w-14" />
              <div className="text-3xl font-bold text-teal-600">
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
              <Link to="/Register">
                <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-gray-200">
                  Register
                </button>
              </Link>
              <Link to="/Login">
                <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700">
                  Log In
                </button>
              </Link>
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

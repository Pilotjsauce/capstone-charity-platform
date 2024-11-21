import { NavLink } from "react-router-dom";
import logo from "./pictures/logo.png";
import { Link } from "react-router-dom";

//I originally used <Link> until I read online and was able to reference some pre written code showing how you can use NavLink instead to show which page you are on. I thought this fit a little better because i'd like to be a bit more clear which page the user is currently on. Right now whichever route included in the header you access will be underlined. subtle but should be enough for now

const Header = () => {
  return (
    <div className="text-gray-700 font-serif font-bold">
      <div className="p-5 bg-brand-green"></div>
      <header className="bg-brand-offWhite p-4 flex justify-between items-center border-t-2 border-t-brand-softbeige">
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-14 w-14" />
            <div className="text-3xl font-bold">Hands Together</div>
          </div>
        </Link>
        <nav className="flex gap-4">
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Browse Opportunities
          </NavLink>
          <NavLink
            to="/our-mission"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Our Mission
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Search
          </NavLink>
        </nav>

        <div className="flex gap-2">
          <div className="flex gap-2">
            <button className="border border-brand-green text-green-700 px-4 py-2 rounded hover:bg-green-100 transition">
              Register
            </button>
            <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-green-800 transition">
              Log In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom"

const Footer = () => {
    return (
      
      <div className="bg-brand-green p-8 text-center font-thin text-x font-style: italic" >
        <nav className="grid grid-cols-2 gap-1">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/how-it-works" className="hover:underline">How it works</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> 
      </nav>
      </div>
    );
  };
  export default Footer;
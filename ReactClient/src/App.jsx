//import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"; 
import Browse from "./pages/Browse"; 
import Search from "./pages/Search"; 
import OurMission from "./pages/OurMission";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast" //for showing cool notifications
import { UserContextProvider } from "../context/userContext";
import RouteComponent from './components/RouteComponent';
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true;

const AppLayout = () => ( // Defines the main layout of the application
  <div className="min-h-screen flex flex-col"> 
    {/* A flexible, column-oriented layout with a minimum height of the screen */}
    <Header /> 
    {/* Renders the Header at the top */}
    <main className="flex-grow">
      <Outlet /> 
      {/* Renders the child route components dynamically */}
    </main>
    <Footer /> 
    {/* Renders the Footer at the bottom */}
  </div>
);

const router = createBrowserRouter([ // Define the router with route configurations
  {
    path: "/", // Root path of the application
    element: <AppLayout />, 
    children: [ // The AppLayout component acts as the parent layout for child routes
      { path: "/", element: <Home /> }, // Home page rendered for the root path
      { path: "/browse", element: <Browse /> },  // Browse page rendered for /browse
      { path: "/search", element: <Search /> },  // Search page rendered for /search
      { path: "/our-mission", element: <OurMission /> },  // Our Mission page rendered for /our-mission
    ],
  },
]);

function App() { // Main App component
  return (
    <RouterProvider router={router}> 
      {/* Provides the routing context to the application */}
      <RouteComponent /> 
      {/* Custom route-related component for additional logic or functionality */}
    </RouterProvider>
  );
}
export default App; // Exports the App component as the default export
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"; 
import Browse from "./pages/Browse"; 
import Search from "./pages/Search"; 
import OurMission from "./pages/OurMission";import RouteComponent from './components/RouteComponent';
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

const AppLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Toaster position="top-right" toastOptions={{duration: 2000}} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/search", element: <Search /> },
      { path: "/our-mission", element: <OurMission /> },
      { path: "/Register", element: <Register /> },
      { path: "/Login", element: <Login /> },
    ],
  },
]);
function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router}>
        <RouteComponent />
      </RouterProvider>
    </UserContextProvider>
  );
}


export default App;
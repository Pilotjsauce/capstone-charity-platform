import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";// Import necessary components and modules from React Router and the project
import "./App.css"; // Import the main CSS file for styling
import Footer from "./components/Footer"; // Footer component
import Header from "./components/Header"; // Header component
import Home from "./pages/Home"; // Home page component
import Browse from "./pages/Browse"; // Browse page component
import Search from "./pages/Search"; // Search page component
import OurMission from "./pages/OurMission"; // Our Mission page component
import RouteComponent from "./components/RouteComponent"; // Custom route component (presumably for additional logic)

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
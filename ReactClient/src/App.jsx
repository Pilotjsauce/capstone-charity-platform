import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import OurMission from "./pages/OurMission";
import RouteComponent from "./components/RouteComponent";


const AppLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <RouteComponent />
    </RouterProvider>
  );
}

export default App;
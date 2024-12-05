import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"; 
import Browse from "./pages/Browse"; 
import Search from "./pages/Search"; 
import OurMission from "./pages/OurMission";
import RouteComponent from './components/RouteComponent';
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/* We already have this functionality but I will leave it here for people to decide which they prefer.
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
*/
function App() {
  return (
    <Router>
      <RouteComponent></RouteComponent><div className="min-h-screen flex flex-col">
        <Header />
        
        {/* using Router because the previous setup i had only allowed for one page to be rendered ever */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/search" element={<Search />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


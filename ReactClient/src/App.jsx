import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"; 
import Browse from "./pages/Browse"; 
import Search from "./pages/Search"; 
import OurMission from "./pages/OurMission";import RouteComponent from './components/RouteComponent';


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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;



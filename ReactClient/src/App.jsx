import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

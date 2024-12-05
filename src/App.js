import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import Tours from "./components/Tours";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <Tours />
      <Footer />
    </>
  );
}

export default App;

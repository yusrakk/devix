import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import About from "./components/About";
import Footer from "./components/Footer";
import Help from "./pages/Help"; // Pastikan file ini ada

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Calculator />
              <About />
              <Footer />
            </>
          } />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

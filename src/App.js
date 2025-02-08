import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import About from "./components/About";
import Footer from "./components/Footer";
import Help from "./pages/Help"; // Pastikan file ini ada

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); 
  }, [location.pathname]); 

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Calculator />
            <About />
            <Footer />
          </>
        }
      />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

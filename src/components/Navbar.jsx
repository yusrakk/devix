import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setHidden(true); // Sembunyikan navbar saat scrolling

      // Hapus timeout sebelumnya untuk mencegah bug
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Tampilkan navbar setelah scrolling berhenti
      scrollTimeout.current = setTimeout(() => {
        setHidden(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <nav
      id="Navbar" // Menambahkan ID pada navbar
      className={`fixed z-50 w-full py-4 transition-all duration-300 ${
        hidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      } ${
        scrolled
          ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">KALKULATOR ROI</h1>

        <ul className="flex space-x-6 text-gray-900">
          <li className="flex items-center space-x-2">
            <img src="/home.svg" alt="Home" className="w-5 h-5 opacity-80" />
            <a href="#beranda" className="transition duration-300 hover:text-blue-500">Beranda</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/calcu.svg" alt="Kalkulator" className="w-5 h-5 opacity-80" />
            <a href="#kalkulator" className="transition duration-300 hover:text-blue-500">Kalkulator</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/about.svg" alt="Tentang" className="w-5 h-5 opacity-80" />
            <a href="#tentang" className="transition duration-300 hover:text-blue-500">Tentang</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/help.svg" alt="Bantuan" className="w-5 h-5 opacity-80" />
            <Link to="/help" className="transition duration-300 hover:text-blue-500">Bantuan</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

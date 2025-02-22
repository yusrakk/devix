import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setHidden(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
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

  if (location.pathname === "/help") {
    return null;
  }

  return (
    <nav
      className={`fixed z-50 w-full py-4 transition-all duration-300 ${
        hidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      } ${
        scrolled
          ? "bg-black bg-opacity-30 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto">
        <h1 className="text-2xl font-bold text-white">KALKULATOR ROI</h1>

        {/* Mobile Menu Icon */}
        <button
          className="p-2 rounded-md shadow-md lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/menu.svg" alt="Menu" className="w-8 h-8" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-2 text-white lg:flex">
          {[
            { href: "#beranda", icon: "/home.svg", label: "Beranda" },
            { href: "#kalkulator", icon: "/calcu.svg", label: "Kalkulator" },
            { href: "#tentang", icon: "/about.svg", label: "Tentang" },
            { to: "/help", icon: "/help.svg", label: "Bantuan" },
          ].map((item, index) => (
            <li key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 space-x-2 transition duration-300 rounded-md hover:bg-white hover:bg-opacity-20"
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5 opacity-80" />
                  <span>{item.label}</span>
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="flex items-center px-4 py-2 space-x-2 transition duration-300 rounded-md hover:bg-white hover:bg-opacity-20"
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5 opacity-80" />
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute w-48 p-4 bg-gray-800 rounded-md shadow-lg right-4 top-16 lg:hidden">
          <ul className="space-y-2 text-center text-white">
            {[
              { href: "#beranda", label: "Beranda" },
              { href: "#kalkulator", label: "Kalkulator" },
              { href: "#tentang", label: "Tentang" },
              { to: "/help", label: "Bantuan" },
            ].map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block p-3 transition duration-300 rounded-md hover:bg-blue-500 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="block p-3 transition duration-300 rounded-md hover:bg-blue-500 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

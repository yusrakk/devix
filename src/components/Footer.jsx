import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-900 bg-white">
      <div className="container flex flex-col items-start justify-between mx-auto text-center md:flex-row md:text-left">
        
        {/* Bagian Kiri - Brand */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-extrabold">KALKULATOR ROI</h2>
          <div className="flex justify-center gap-4 mt-3 md:justify-start">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <img src="/wa.svg" alt="WhatsApp" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://instagram.com/devix_tech" target="_blank" rel="noopener noreferrer">
              <img src="/ig.svg" alt="Instagram" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="mailto:devixtech.solutions@gmail.com">
              <img src="/mail.svg" alt="Email" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-600">© 2025 Kalkulator ROI. All Rights Reserved.</p>
        </div>

        {/* Bagian Tengah - Tautan */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-extrabold">Tautan</h3>
          <ul className="space-y-1">
            <li><a href="beranda" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Beranda</a></li>
            <li><a href="kalkulator" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Kalkulator</a></li>
            <li><a href="tentang" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Tentang</a></li>
            <li><a href="bantuan" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Bantuan</a></li>
          </ul>
        </div>

        {/* Bagian Kanan - Legal & Safety */}
        <div>
          <h3 className="text-lg font-extrabold">Legal & Safety</h3>
          <ul className="space-y-1">
            <li><a href="javascript:void(0);" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Privacy Policy</a></li>
            <li><a href="javascript:void(0);" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Terms of Use</a></li>
            <li><a href="javascript:void(0);" className="transition duration-300 ease-in-out hover:text-blue-700 hover:underline underline-offset-4">Report Vulnerabilities</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

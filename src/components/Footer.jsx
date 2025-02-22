import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-900 bg-white">
      <div className="container grid gap-8 mx-auto text-center md:grid-cols-3 md:text-left">

        {/* Bagian Kiri - Kalkulator ROI */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-extrabold">Kalkulator ROI</h2>
          <p className="mt-2 text-sm text-gray-600">© 2025 Devix. All Rights Reserved.</p>
        </div>

        {/* Bagian Tengah - Tautan */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-extrabold">Tautan</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="#beranda" className="transition hover:text-blue-700 hover:underline underline-offset-4">Beranda</a></li>
            <li><a href="#kalkulator" className="transition hover:text-blue-700 hover:underline underline-offset-4">Kalkulator</a></li>
            <li><a href="#tentang" className="transition hover:text-blue-700 hover:underline underline-offset-4">Tentang</a></li>
            <li><a href="/help" className="transition hover:text-blue-700 hover:underline underline-offset-4">Bantuan</a></li>
          </ul>
        </div>
        {/* Bagian Kanan - Sosial Media */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-extrabold">Sosial Media</h2>
          <div className="flex justify-center gap-4 mt-3 md:justify-center">
            <a href="https://www.tiktok.com/@devix.tech" target="_blank" rel="noopener noreferrer">
              <img src="/tt.svg" alt="Tiktok" className="w-8 h-8 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/devixtech.id/" target="_blank" rel="noopener noreferrer">
              <img src="/ig.svg" alt="Instagram" className="w-8 h-8 transition-transform hover:scale-110" />
            </a>
            <a href="mailto:devixtech.solutions@gmail.com">
              <img src="/mail.svg" alt="Email" className="w-8 h-8 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

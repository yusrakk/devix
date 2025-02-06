import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Masukan Keuntungan Bersih",
    description:
      "Input jumlah keuntungan bersih yang diperoleh dari investasi tersebut setelah dikurangi semua biaya operasional.",
  },
  {
    title: "Masukan Biaya Investasi",
    description:
      "Input jumlah dana yang telah Anda investasikan pada proyek atau bisnis dan pastikan angka yang dimasukkan sudah benar untuk mendapatkan hasil yang akurat.",
  },
  {
    title: "Klik Tombol Hitung ROI",
    description:
      "Sistem akan secara otomatis menghitung nilai ROI berdasarkan rumus yaitu, ROI = (Keuntungan bersih / Biaya Investasi) × 100.",
  },
  {
    title: "Melihat Hasil",
    description:
      "Hasil perhitungan ROI akan ditampilkan dalam bentuk angka persentase. Jika nilai ROI positif, berarti investasi menguntungkan dan jika negatif, berarti investasi mengalami kerugian.",
  },
  {
    title: "Visualisasi Hasil",
    description:
      "Anda dapat melihat hasil ROI dalam bentuk grafik atau animasi untuk memudahkan analisis.",
  },
];

const HowToUseROI = () => {
  useEffect(() => {
    // Menyembunyikan navbar
    const navbar = document.getElementById("Navbar"); 
    if (navbar) navbar.style.display = "none";

    return () => {
      // Mengembalikan navbar saat keluar dari halaman
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center px-4 relative">
      {/* Tombol Kembali */}
      <Link to="#beranda" className="absolute top-6 left-6">
        <img src="/arrowleft.svg" alt="Kembali" className="w-10 h-10 cursor-pointer" />
      </Link>

      <div className="w-full max-w-3xl p-6 border shadow-xl bg-white/10 backdrop-blur-lg md:p-8 rounded-2xl border-white/20">
        <h1 className="mb-6 text-xl font-bold text-center text-white md:text-2xl">
          Cara Menggunakan Kalkulator ROI
        </h1>
        <ul className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-black bg-yellow-500 rounded-full">
                {index + 1}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{step.title}</h2>
                <p className="text-sm leading-relaxed text-gray-300">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowToUseROI;

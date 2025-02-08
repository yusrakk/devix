import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
      "Sistem akan secara otomatis menghitung nilai ROI berdasarkan rumus yaitu, ROI = (Keuntungan bersih / Biaya Investasi) × 100",
  },
  {
    title: "Melihat Hasil",
    description:
      "Hasil perhitungan ROI akan ditampilkan dalam bentuk angka persentase. Jika nilai ROI positif, berarti investasi menguntungkan, dan jika negatif, berarti investasi mengalami kerugian."
  },
  {
    title: "Visualisasi Hasil",
    description:
      "Anda dapat melihat hasil ROI dalam bentuk grafik atau animasi untuk memudahkan analisis.",
  },
];

const HowToUseROI = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const navbar = document.getElementById("Navbar");
    if (navbar) navbar.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8"
      style={{ 
        backgroundColor: "#0f172a", 
        backgroundImage: "url('/bg-help.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundBlendMode: "lighten" 
      }}
    >
      {/* Header & Back Button */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-6xl px-4 mb-6 sm:mb-8">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 transition-all bg-white rounded-full sm:w-12 sm:h-12 hover:bg-white/30"
          data-aos="fade-right"
        >
          <img src="/arrowleft.svg" alt="Kembali" className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>

        <h1 
          className="relative flex-1 text-2xl sm:text-4xl font-bold text-white max-w-[90%] sm:max-w-none sm:text-center text-center ml-auto mr-auto sm:ml-0 sm:mr-auto" 
          data-aos="fade-up"
        >
          Cara Menggunakan Kalkulator ROI
        </h1>

      </div>

      {/* Steps List */}
      <div className="relative z-10 w-full p-6 shadow-xl sm:p-10 max-w-7xl bg-white/10 rounded-2xl border-white/20" data-aos="fade-up">
        <ul className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className="relative flex flex-wrap items-start gap-4 sm:flex-nowrap sm:gap-6">
              {/* Step Number */}
              <div
                className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-black bg-yellow-500 rounded-full sm:w-10 sm:h-10 sm:text-lg"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                {index + 1}
              </div>

              {/* Step Text */}
              <div className="relative flex-1 max-w-[90%]" data-aos="fade-left" data-aos-delay={index * 200}>
                <h2 className="relative inline-block px-2 py-1 text-lg font-semibold text-white rounded-md sm:px-3 sm:py-1 sm:text-2xl bg-white/10">
                  {step.title}
                </h2>
                <p className="relative mt-2 text-sm leading-relaxed text-white sm:text-lg">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowToUseROI;

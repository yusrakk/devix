import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex items-center justify-center h-screen px-10 bg-center bg-cover"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Konten Hero */}
      <div className="z-10 flex flex-col items-center text-center text-white max-w-8xl">
        {/* Title */}
        <h1
          className="text-5xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Maksimalkan Keuntungan{" "}
          <span className="inline-block text-blue-400">Investasimu!</span>
        </h1>

        {/* Subtitle with more margin and larger font */}
        <p
          className="mt-8 text-xl sm:mt-4" // Adjust margin-top here for better spacing
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Kalkulator ROI mengetahui seberapa menguntungkan investasimu dalam hitungan detik.
        </p>

        {/* Button */}
        <a
          href="#kalkulator"
          className="inline-block px-6 py-3 mt-8 text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          Hitung ROI Sekarang!
        </a>
      </div>
    </section>
  );
};

export default Hero;

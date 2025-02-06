import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { question: "Apa itu Kalkulator ROI?", answer: "Kalkulator ROI (Return on Investment) adalah alat yang membantu Anda menghitung tingkat keuntungan dari investasi yang telah dilakukan." },
  { question: "Apa yang Dimaksud dengan Keuntungan Bersih?", answer: "Keuntungan bersih adalah uang yang Anda peroleh setelah dikurangi biaya investasi." },
  { question: "Apakah Hasil Perhitungan ROI Akurat?", answer: "Hasil perhitungan ROI sangat bergantung pada data yang Anda masukkan." },
  { question: "Apakah Kalkulator ROI Dapat Digunakan untuk Semua Jenis Investasi?", answer: "Ya, kalkulator ROI dapat digunakan untuk berbagai jenis investasi." },
  { question: "Apa Manfaat Menggunakan Kalkulator ROI?", answer: "Kalkulator ROI membantu Anda memahami efisiensi investasi dan membuat keputusan yang lebih terinformasi." },
  { question: "Apakah Saya Perlu Membayar untuk Menggunakan Kalkulator ROI Ini?", answer: "Tidak, kalkulator ROI ini sepenuhnya gratis dan dapat digunakan oleh siapa saja." }
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="tentang" className="px-6 py-24 text-center bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold" data-aos="fade-up">Tentang ROI</h2>
        <p className="text-xl leading-relaxed text-white" data-aos="fade-up">
          Return on Investment (ROI) adalah metrik yang digunakan untuk mengevaluasi efisiensi atau profitabilitas investasi.
          <br />
          Dengan memahami ROI, investor dapat membuat keputusan yang lebih baik dalam mengelola investasi mereka.
        </p>

        <div className="mt-12" data-aos="fade-up">
          <h3 className="mb-6 text-2xl font-semibold text-left">Skala ROI</h3>
          <div className="space-y-4">
            <div className="p-4 text-xl font-semibold text-left text-white transition-transform duration-300 transform bg-red-500 rounded-2xl hover:scale-105">
              0% – 10%: ROI rendah, berarti investasi memberikan hasil yang kurang atau bahkan tidak menguntungkan.
            </div>
            <div className="p-4 text-xl font-semibold text-left text-white transition-transform duration-300 transform bg-yellow-500 rounded-2xl hover:scale-105">
              10% – 20%: ROI sedang, ada hasil yang lumayan, namun masih bisa diperbaiki.
            </div>
            <div className="p-4 text-xl font-semibold text-left text-white transition-transform duration-300 transform bg-green-500 rounded-2xl hover:scale-105">
              20% – 50%: ROI tinggi, menunjukkan bahwa investasi sudah memberikan pengembalian yang baik dan signifikan.
            </div>
            <div className="p-4 text-xl font-semibold text-left text-white transition-transform duration-300 transform bg-blue-500 rounded-2xl hover:scale-105">
              50% ke atas: ROI sangat baik, investasi sangat menguntungkan dan menghasilkan return yang luar biasa.
            </div>
          </div>
          <p className="mt-4 text-sm text-right text-white">*Skala dapat berbeda tergantung pada sektor tertentu</p>
        </div>
        <div className="mt-12" data-aos="fade-up">
          <h3 className="mb-6 text-2xl font-semibold text-left">FAQ</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden border border-gray-600 rounded-md" data-aos="fade-up">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-left transition duration-300 bg-gray-800 hover:bg-gray-700"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-left bg-gray-900 border-t border-gray-600" data-aos="fade-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

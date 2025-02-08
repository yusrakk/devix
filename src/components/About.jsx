import React, { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => {
      const newIndexes = new Set(prev);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  const faqs = useMemo(
    () => [
      {
        question: "Apa itu Kalkulator ROI?",
        answer:
          "Kalkulator ROI (Return on Investment) adalah alat yang membantu Anda menghitung tingkat keuntungan dari investasi yang telah dilakukan. Dengan memasukkan biaya investasi dan keuntungan bersih, Anda bisa mendapatkan nilai ROI secara instan.",
      },
      {
        question: "Apa yang Dimaksud dengan Keuntungan Bersih?",
        answer:
          "Keuntungan bersih adalah jumlah uang yang Anda peroleh setelah dikurangi biaya investasi. Misalnya, jika Anda menghasilkan Rp 15.000.000 dari suatu investasi dan biaya investasi Anda adalah Rp 10.000.000, maka keuntungan bersih Anda adalah Rp 5.000.000.",
      },
      {
        question: "Apakah Hasil Perhitungan ROI Akurat?",answer: "Hasil perhitungan ROI sangat bergantung pada data yang Anda masukkan. Jika data yang dimasukkan akurat, maka hasil perhitungan ROI juga akan akurat. Namun, perlu diingat bahwa kalkulator ini hanya memberikan estimasi dan tidak memperhitungkan faktor-faktor lain seperti risiko atau inflasi.",
        
      },
      {
        question: "Apakah Kalkulator ROI Dapat Digunakan untuk Semua Jenis Investasi?",
        answer:
          "Ya, kalkulator ROI dapat digunakan untuk berbagai jenis investasi, seperti saham, properti, bisnis, atau proyek lainnya. Namun, pastikan Anda memasukkan data yang relevan dengan jenis investasi yang Anda lakukan.",
      },
      {
        question: "Apa Manfaat Menggunakan Kalkulator ROI??",
        answer: (
          <ul className="pl-5 list-decimal">
            <li>Masukkan jumlah investasi awal yang telah dikeluarkan.</li>
            <li>Tambahkan jumlah keuntungan yang telah diperoleh.</li>
            <li>Klik tombol hitung untuk mendapatkan ROI dalam bentuk persentase.</li>
          </ul>
        ),
      },
      {
        question: "Apakah Saya Perlu Membayar untuk Menggunakan Kalkulator ROI Ini?",
        answer: "Tidak, kalkulator ROI ini sepenuhnya gratis dan dapat digunakan oleh siapa saja tanpa biaya.",
      },
    ],
    []
  );

  return (
    <section id="tentang" className="px-6 py-24 text-center bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold" data-aos="fade-up">
          Tentang ROI
        </h2>
        <p className="text-xl leading-relaxed text-white" data-aos="fade-up">
          Return on Investment (ROI) adalah metrik yang digunakan untuk mengevaluasi efisiensi atau profitabilitas investasi.
          <br />
          Dengan memahami ROI, investor dapat membuat keputusan yang lebih baik dalam mengelola investasi mereka.
        </p>

        <div className="mt-12" data-aos="fade-up">
          <h3 className="mb-6 text-2xl font-semibold text-left">Skala ROI</h3>
          <div className="space-y-4">
            {[
              { color: "bg-red-500", text: "0% – 10%: ROI rendah, berarti investasi memberikan hasil yang kurang atau bahkan tidak menguntungkan." },
              { color: "bg-yellow-500", text: "10% – 20%: ROI sedang, ada hasil yang lumayan, namun masih bisa diperbaiki." },
              { color: "bg-green-500", text: "20% – 50%: ROI tinggi, menunjukkan bahwa investasi sudah memberikan pengembalian yang baik dan signifikan." },
              { color: "bg-blue-500", text: "50% ke atas: ROI sangat baik, investasi sangat menguntungkan dan menghasilkan return yang luar biasa." },
            ].map((item, i) => (
              <div key={i} className={`p-4 text-xl font-semibold text-left text-white transition-transform duration-300 transform ${item.color} rounded-2xl hover:scale-105`}>
                {item.text}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-right text-white">*Skala dapat berbeda tergantung pada sektor tertentu</p>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h3 className="mb-6 text-2xl font-semibold text-left">FAQ</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndexes.has(index);
              return (
                <div key={index} className="overflow-hidden border border-gray-600 rounded-md" data-aos="fade-up">
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-left transition duration-300 bg-gray-800 hover:bg-gray-700"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <img
                      src="/arrowdown.svg"
                      alt="Toggle"
                      className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 text-left bg-gray-900 border-t border-gray-600" data-aos="fade-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

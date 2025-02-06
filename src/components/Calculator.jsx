import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Calculator = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [investment, setInvestment] = useState("");
  const [profit, setProfit] = useState("");
  const [investmentCurrency, setInvestmentCurrency] = useState("IDR");
  const [profitCurrency, setProfitCurrency] = useState("IDR");
  const [roi, setRoi] = useState(0);

  const exchangeRate = 15000; // 1 USD = 15000 IDR (dummy rate, bisa diganti dengan API real)

  const calculateROI = () => {
    let convertedInvestment = parseFloat(investment) || 0;
    let convertedProfit = parseFloat(profit) || 0;

    // Konversi mata uang jika berbeda
    if (investmentCurrency !== profitCurrency) {
      if (investmentCurrency === "IDR" && profitCurrency === "USD") {
        convertedProfit = convertedProfit * exchangeRate;
      } else if (investmentCurrency === "USD" && profitCurrency === "IDR") {
        convertedInvestment = convertedInvestment * exchangeRate;
      }
    }

    if (convertedInvestment > 0) {
      const roiValue = ((convertedProfit - convertedInvestment) / convertedInvestment) * 100;
      setRoi(roiValue.toFixed(2));
    } else {
      setRoi(0);
    }
  };

  const data = {
    labels: ["Biaya Investasi", "Keuntungan Bersih"],
    datasets: [
      {
        data: [parseFloat(investment) || 0, Math.max((parseFloat(profit) || 0) - (parseFloat(investment) || 0), 0)],
        backgroundColor: ["#f59e0b", "#10b981"],
      },
    ],
  };

  return (
    <section id="kalkulator" className="px-6 py-16 text-white bg-gray-900">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="mb-4 text-3xl font-bold">Kalkulator ROI</h2>
        <p className="text-xl leading-relaxed text-white">Masukkan data investasi dan keuntungan bersih untuk menghitung ROI.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8" data-aos="fade-up">
        <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg md:w-1/3">
          <label className="block mb-2 text-gray-300">Biaya Investasi</label>
          <div className="flex">
            <select
              className="p-3 text-gray-900 bg-white border rounded-l"
              value={investmentCurrency}
              onChange={(e) => setInvestmentCurrency(e.target.value)}
            >
              <option value="IDR">IDR (Rp)</option>
              <option value="USD">USD ($)</option>
            </select>
            <input
              type="number"
              placeholder="Masukkan investasi"
              className="w-full p-3 text-gray-900 bg-white border rounded-r"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </div>
          <small className="text-gray-400">*Dalam {investmentCurrency === "IDR" ? "Rupiah (Rp)" : "Dollar ($)"}</small>

          <label className="block mt-4 mb-2 text-gray-300">Keuntungan Bersih</label>
          <div className="flex">
            <select
              className="p-3 text-gray-900 bg-white border rounded-l"
              value={profitCurrency}
              onChange={(e) => setProfitCurrency(e.target.value)}
            >
              <option value="IDR">IDR (Rp)</option>
              <option value="USD">USD ($)</option>
            </select>
            <input
              type="number"
              placeholder="Masukkan keuntungan"
              className="w-full p-3 text-gray-900 bg-white border rounded-r"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
            />
          </div>
          <small className="text-gray-400">*Dalam {profitCurrency === "IDR" ? "Rupiah (Rp)" : "Dollar ($)"}</small>

          <button
            onClick={calculateROI}
            className="w-full p-3 mt-4 font-bold text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Hitung ROI
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="flex flex-col items-center w-full p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Hasil ROI</h3>
            <div className="px-6 py-2 text-3xl font-bold text-green-500 bg-gray-200 rounded-lg shadow-md">
              {roi}%
            </div>
            <div className="w-64 h-64 mt-6">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

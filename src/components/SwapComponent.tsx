import React, { useState } from "react";
import FaExchangeAlt from "../assets/transfer.svg";
import usdc from "../assets/usdc.svg";
import usd from "../assets/usd.svg";

const SwapComponent: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState("USDC");
  const [toCurrency, setToCurrency] = useState("USD");

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex items-center justify-center my-16 p-4">
      <div className="flex flex-col sm:flex-row items-center p-6 rounded-3xl border bg-[#242222] space-y-4 sm:space-y-0 sm:space-x-3 w-full max-w-2xl ">
        <div className="flex flex-col flex-1 bg-[#111] p-4 rounded-3xl border-2 border-[#333131] w-full">
          <span className="text-gray-400 text-left text-sm sm:text-lg my-1">
            from
          </span>
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-center bg-gray-800 py-2 sm:p-3 rounded-3xl space-x-2">
              <img src={usdc} alt="USDC" className="w-6 h-6 sm:w-8 sm:h-8" />
              <select
                className="bg-transparent text-white mr-5 text-lg sm:text-2xl font-semibold outline-none"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
              </select>
            </div>

            <input
              type="number"
              placeholder="0"
              className="text-right text-xl sm:text-3xl bg-transparent text-white w-16 sm:w-24 outline-none"
            />
          </div>
        </div>

        <button
          className="bg-gray-700 p-2 sm:p-3 rounded-lg hover:bg-gray-600 transition"
          onClick={swapCurrencies}
        >
          <img src={FaExchangeAlt} alt="swap icon" className="w-6 sm:w-8" />
        </button>

        <div className="flex flex-col flex-1 bg-[#111] p-4 rounded-3xl border-2 border-[#333131] w-full">
          <span className="text-gray-400 text-right text-sm sm:text-lg my-1">
            to
          </span>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-gray-400 text-left text-xl sm:text-3xl w-16 sm:w-24">
              $0
            </span>
            <div className="flex items-center bg-gray-800 p-2 sm:p-3 rounded-3xl space-x-2">
              <img src={usd} alt="USD" className="w-6 h-6 sm:w-8 sm:h-8" />
              <select
                className="bg-transparent text-white text-lg sm:text-2xl font-semibold outline-none"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapComponent;

"use client";

import { useEffect, useRef, useState } from "react";
import { Currency } from "@/types/currency";
import { CurrencySelect } from "./CurrencySelect";
import { useCurrencyRates } from "@/hooks/useCurrencyRates";

interface CurrencyInputProps {
  label: string;
  selectedCurrency: Currency;
  onCurrencySelect: (currency: Currency) => void;
  amount: string;
  onAmountChange: (value: string) => void;
  type: "from" | "to";
  currencies: Currency[];
  isActive: boolean;
  setActive: (active: boolean) => void;
  setStablecoin?: (selectedCurrency: Currency, label: string) => void;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  selectedCurrency,
  onCurrencySelect,
  amount,
  onAmountChange,
  type,
  currencies,
  isActive,
  setActive,
  setStablecoin,
}: CurrencyInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!amount) {
      setActive(false);
      setHasTyped(false);
    }
  }, [amount, setActive]);

  const updateCurrency = (currency: Currency) => {
    setStablecoin?.(currency, label);
    onCurrencySelect(currency);
  };

  return (
    <div
      className={`
        rounded-[2.4rem] p-[.5rem] 
        ${
          isActive || isFocused
            ? "bg-gradient-to-br from-[#5c462e] to-[#402d50]"
            : "bg-zinc-800"
        }
        transition-all duration-300
      `}
    >
      <div className="bg-[#141414] rounded-[1.9rem] p-4 border border-white/5">
        <div
          className={`${
            type === "from"
              ? "flex md:justify-start justify-end"
              : "flex justify-end md:justify-start"
          } mb-2`}
        >
          <label className="text-[1.4rem] text-white/50">{label}</label>
        </div>
        <div
          className={`flex justify-between gap-4 ${
            type === "from"
              ? "md:flex-row flex-row-reverse"
              : "flex-row-reverse"
          }`}
        >
          <CurrencySelect
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            onSelect={updateCurrency}
            type={type}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              onAmountChange(e.target.value);
              setHasTyped(true);
              setActive(true);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !hasTyped && setIsFocused(false)}
            placeholder="0"
            className={`bg-transparent w-full focus:outline-none placeholder-white/50 text-[2rem] ${
              type === "from" ? "md:text-right text-left" : "text-left"
            }`}
            min="0"
            step="any"
          />
        </div>
      </div>
    </div>
  );
};

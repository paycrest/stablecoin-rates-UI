import { Currency } from '@/types/currency';
import { CurrencySelect } from './CurrencySelect';
import { useEffect, useState } from 'react';

interface CurrencyInputProps {
  label: string;
  selectedCurrency: Currency;
  onCurrencySelect: (currency: Currency) => void;
  amount: string;
  onAmountChange: (value: string) => void;
  type: 'from' | 'to';
  currencies: Currency[];
  isActive: boolean;
  setActive: (active: boolean) => void;
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
}: CurrencyInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!amount) {
      setActive(false);
      setHasTyped(false);
    }
  }, [amount, setActive]);

  return (
    <div
      className={`
        rounded-[24px] p-[5px] 
        ${(isActive || isFocused) ? "bg-gradient-to-br from-[#5c462e] to-[#402d50]" : "bg-zinc-800"}
        transition-all duration-300
      `}
    >
      <div className="bg-[#141414] rounded-[19px] p-4 border border-white/5">
        <div className={`${type === 'from' ? 'flex justify-start' : 'flex justify-end'} mb-2`}>
          <label className="text-[14px] text-white/50">{label}</label>
        </div>
        <div className={`flex justify-between gap-4 ${type === 'from' ? 'flex-row' : 'flex-row-reverse'}`}>
          <CurrencySelect
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            onSelect={onCurrencySelect}
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
            onBlur={() => {
              if (!hasTyped) setIsFocused(false);
            }}
            placeholder="0"
            className={`bg-transparent w-full focus:outline-none placeholder-white/50 text-[20px] ${type === 'from' ? 'text-right' : 'text-left'}`}
            min="0"
            step="any"
          />
        </div>
      </div>
    </div>
  );
};

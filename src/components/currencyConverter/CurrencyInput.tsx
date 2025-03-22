
import { Currency } from '../../types/currency';
import { CurrencySelect } from './CurrencySelect';

interface CurrencyInputProps {
  label: string;
  selectedCurrency: Currency;
  onCurrencySelect: (currency: Currency) => void;
  amount: string;
  onAmountChange: (value: string) => void;
  type: 'from' | 'to';
  currencies: Currency[];
}

export function CurrencyInput({
  label,
  selectedCurrency,
  onCurrencySelect,
  amount,
  onAmountChange,
  type,
  currencies
}: CurrencyInputProps) {
  return (
    <div className="bg-[#141414] rounded-[28px] p-4 border-4 border-white/5 w-full">
      <div className={`${type === 'from' ? 'flex justify-start' : 'flex justify-end'} mb-2`}>
        <label className="text-sm text-gray-500">{label}</label>
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
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="0"
          className="bg-transparent text-right text-2xl w-full focus:outline-none placeholder-gray-600"
          min="0"
          step="any"
        />
      </div>
    </div>
  );
}
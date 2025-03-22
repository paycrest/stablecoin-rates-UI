
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
    <div className="bg-[#2C2C2E] rounded-xl p-4">
      <div className={`${type === 'from' ? 'flex justify-start' : 'flex justify-end'}`}>
        <label className="text-sm text-gray-500">{label}</label>
      </div>
      <div className={`flex gap-4 ${type === 'from' ? 'flex-row' : 'flex-row-reverse'}`}>
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
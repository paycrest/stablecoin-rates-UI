import { useState } from 'react';
import { Search } from 'lucide-react';
import { Currency } from '../../types/currency';
import { GB, US, EU, MK, MM, AL, AR, AU } from 'country-flag-icons/react/3x2';

const FlagIcon = ({ code, fallbackFlag }: { code: string, fallbackFlag?: string }) => {
  const flagComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    'USD': US,
    'GBP': GB,
    'EUR': EU,
    'MKD': MK,
    'MMK': MM,
    'ALL': AL,
    'ARS': AR,
    'AUD': AU,
  };

  const IconComponent = flagComponents[code];
  if (IconComponent) {
    return <IconComponent className="w-5 h-5 rounded-full" />;
  }
  return fallbackFlag ? (
    <span className="text-xl">{fallbackFlag}</span>
  ) : null;
};

interface CurrencySelectProps {
  currencies: Currency[];
  selectedCurrency: Currency;
  onSelect: (currency: Currency) => void;
  type?: 'from' | 'to';
}

export function CurrencySelect({ 
  currencies, 
  selectedCurrency, 
  onSelect,
  type = 'from'
}: CurrencySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
  
    const filteredCurrencies = currencies.filter(currency =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.code.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3C3C3E] transition-colors rounded-lg"
        >
          {selectedCurrency.type === 'fiat' ? (
            <FlagIcon code={selectedCurrency.code} fallbackFlag={selectedCurrency.flag} />
          ) : (
            <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-sm">
              {selectedCurrency.symbol}
            </span>
          )}
          <span className="font-medium text-sm">{selectedCurrency.code}</span>
        </button>
  
        {isOpen && (
          <div className="absolute top-full mt-2 w-64 bg-[#2C2C2E] rounded-xl shadow-lg z-10">
            <div className="p-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search currency"
                  className="w-full bg-[#1C1C1E] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="max-h-[240px] overflow-y-auto">
              {filteredCurrencies.map((currency) => (
                <button
                  key={currency.code}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#3C3C3E] transition-colors"
                  onClick={() => {
                    onSelect(currency);
                    setIsOpen(false);
                  }}
                >
                  {currency.type === 'fiat' ? (
                    <FlagIcon code={currency.code} fallbackFlag={currency.flag} />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-sm">
                      {currency.symbol}
                    </span>
                  )}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{currency.code}</span>
                      <span className="text-sm text-gray-400">{currency.name}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
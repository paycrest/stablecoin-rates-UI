import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { Currency } from '../../types/currency';
import { GB, US, EU, MK, MM, AL, AR, AU } from 'country-flag-icons/react/3x2';

const FlagIcon: React.FC<{
  code: string
}> = ({
  code
}) => {
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
    return <IconComponent className="w-10 h-10 !rounded-[50%]" />;
  }
  return null;
};

interface CurrencySelectProps {
  currencies: Currency[];
  selectedCurrency: Currency;
  onSelect: (currency: Currency) => void;
  type?: 'from' | 'to';
}

const CurrencySelect: React.FC<
  CurrencySelectProps
> = ({
  currencies,
  selectedCurrency,
  onSelect,
  type = 'from'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);
  
    const filteredCurrencies = currencies.filter(currency =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.code.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 px-2 py-2 !rounded-[20px] bg-white/5 hover:bg-[#3C3C3E] transition-colors max-w-[100px] !w-screen cursor-pointer"
        >
          {selectedCurrency.type === 'fiat' ? (
            <div className="flex items-center justify-center w-6 h-6 rounded-full">
                <FlagIcon code={selectedCurrency.code} />
            </div>
          ) : (
            <img 
              src={selectedCurrency.iconUrl} 
              alt={selectedCurrency.code}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="font-medium text-[14px]">{selectedCurrency.code}</span>
          <ChevronDown className="w-8 h-8" />
        </button>
  
        {isOpen && (
          <div className={
            `absolute top-[3.5rem] mt-2 w-screen max-w-[23rem] bg-[#2C2C2E] rounded-xl shadow-lg z-10 ${type === 'from' ? 'left-0' : 'right-0'}`
          }>
            <div className="p-2 rounded-[12px]">
              <div className="relative border-1 border-white/10 rounded-[12px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/30 h-8 w-8" />
                <input
                  type="text"
                  placeholder="Search currency"
                  className="w-full bg-transparent rounded-[12px] pl-14 pr-4 py-2 text-[14px] text-white placeholder-white/50 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="max-h-[240px] overflow-y-auto">
              {filteredCurrencies.map((currency) => (
                <button
                  key={currency.code}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#3C3C3E] transition-colors cursor-pointer"
                  onClick={() => {
                    onSelect(currency);
                    setIsOpen(false);
                  }}
                >
                  {currency.type === 'fiat' ? (
                    <FlagIcon code={currency.code} />
                  ) : (
                    <img 
                      src={currency.iconUrl} 
                      alt={currency.code}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-[14px] text-white">{currency.code}</span>
                        <span className="text-[14px] text-white/80">{currency.name}</span>
                      </div>
                      {
                        selectedCurrency.code === currency.code && (
                          <Check className="w-4 h-4 text-white/80" />
                        )
                      }
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export { CurrencySelect };
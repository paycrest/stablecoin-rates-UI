import { useState, useEffect } from 'react';
import { Currency } from '../types/currency';

export function useCurrencyConverter(
  initialFromCurrency: Currency,
  initialToCurrency: Currency
) {
  const [fromCurrency, setFromCurrency] = useState<Currency>(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState<Currency>(initialToCurrency);
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [activeInput, setActiveInput] = useState<'from' | 'to'>('from');

  const convertCurrency = (
    amount: string,
    from: Currency,
    to: Currency,
    direction: 'from' | 'to'
  ) => {
    if (amount === '') {
      setFromAmount('');
      setToAmount('');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return;

    const usdAmount = direction === 'from' 
      ? numAmount / from.rate 
      : numAmount / to.rate;

    if (direction === 'from') {
      const converted = usdAmount * to.rate;
      setToAmount(converted.toFixed(8));
      setFromAmount(amount);
    } else {
      const converted = usdAmount * from.rate;
      setFromAmount(converted.toFixed(8));
      setToAmount(amount);
    }
  };

  useEffect(() => {
    if (activeInput === 'from' && fromAmount) {
      convertCurrency(fromAmount, fromCurrency, toCurrency, 'from');
    } else if (activeInput === 'to' && toAmount) {
      convertCurrency(toAmount, fromCurrency, toCurrency, 'to');
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (value: string) => {
    setActiveInput('from');
    convertCurrency(value, fromCurrency, toCurrency, 'from');
  };

  const handleToAmountChange = (value: string) => {
    setActiveInput('to');
    convertCurrency(value, fromCurrency, toCurrency, 'to');
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    setFromCurrency,
    setToCurrency,
    handleFromAmountChange,
    handleToAmountChange,
    handleSwap,
  };
}
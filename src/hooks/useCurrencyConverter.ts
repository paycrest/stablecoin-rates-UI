import { useState, useEffect, useRef } from "react";
import { Currency } from "../types/currency";

export function useCurrencyConverter(
  initialFromCurrency: Currency,
  initialToCurrency: Currency
) {
  const [fromCurrency, setFromCurrency] =
    useState<Currency>(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState<Currency>(initialToCurrency);
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toRates, setToRates] = useState<string>("");
  const [fromRates, setFromRates] = useState<string>("")
  const [toAmount, setToAmount] = useState<string>("");
  const [activeInput, setActiveInput] = useState<"from" | "to">("from");
  const hasMounted = useRef(false);

  const convertCurrency = (
    amount: string,
    from: Currency,
    to: Currency,
    direction: "from" | "to"
  ) => {
    if (amount === "") {
      setFromAmount("");
      setToAmount("");
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return;

    const usdAmount =
      direction === "from" ? numAmount / from.rate : numAmount / to.rate;

    if (direction === "from") {
      const converted = usdAmount * to.rate;
      setToRates(to.rate.toString())
      setFromRates(from.rate.toString())
      to.type == 'fiat' ? setToAmount(converted.toFixed(4)) : setToAmount(converted.toFixed(2))
      setFromAmount(amount);
    } else {
      console.log(from)
      const converted = usdAmount * from.rate;
      setFromRates(from.rate.toString())
      setToRates(to.rate.toString())
      from.type == 'fiat' ? setFromAmount(converted.toFixed(4)) : setFromAmount(converted.toFixed(2))
      setToAmount(amount);
    }
  };

  const triggerConversion = () => {
    if (activeInput === "from" && fromAmount) {
      convertCurrency(fromAmount, fromCurrency, toCurrency, "from");
    } else if (activeInput === "to" && toAmount) {
      convertCurrency(toAmount, fromCurrency, toCurrency, "to");
    }
  };

  useEffect(() => {
    triggerConversion();
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (value: string) => {
    setActiveInput("from");
    convertCurrency(value, fromCurrency, toCurrency, "from");
  };

  const handleToAmountChange = (value: string) => {
    setActiveInput("to");
    convertCurrency(value, fromCurrency, toCurrency, "to");
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setToCurrency(initialToCurrency);
    setFromCurrency(initialFromCurrency);

    triggerConversion();
  }, [initialFromCurrency, initialToCurrency]);

  return {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    toRates,
    fromRates,
    setFromCurrency,
    setToCurrency,
    handleFromAmountChange,
    handleToAmountChange,
    handleSwap,
  };
}

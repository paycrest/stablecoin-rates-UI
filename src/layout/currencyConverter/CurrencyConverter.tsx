import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { cryptoCurrencies } from '@/data/cryptoCurrencies';
import { fiatCurrencies } from '@/data/fiatCurrencies';
import { CurrencyInput } from './CurrencyInput';
import { SwapButton } from './SwapButton';
import { useState } from 'react';

const CurrencyConverter = () => {
    const {
        fromCurrency,
        toCurrency,
        fromAmount,
        toAmount,
        setFromCurrency,
        setToCurrency,
        handleFromAmountChange,
        handleToAmountChange,
        handleSwap,
    } = useCurrencyConverter(
        cryptoCurrencies.find(c => c.code === 'USDC') || cryptoCurrencies[0],
        fiatCurrencies.find(c => c.code === 'USD') || fiatCurrencies[0]
    );

    // Mantener un estado local para las listas de monedas
    const [fromList, setFromList] = useState(cryptoCurrencies);
    const [toList, setToList] = useState(fiatCurrencies);

    // Función personalizada para manejar el swap
    const handleSwapWithLists = () => {
        // Intercambiar las listas
        setFromList(toList);
        setToList(fromList);
        // Llamar al swap original
        handleSwap();
    };

    return (
        <>
        <div className="flex items-center bg-[#191B1F] text-white p-4 max-w-[571px] mx-auto rounded-[28px] gap-3 mt-10">
            <CurrencyInput
                label="from"
                selectedCurrency={fromCurrency}
                onCurrencySelect={setFromCurrency}
                amount={fromAmount}
                onAmountChange={handleFromAmountChange}
                type="from"
                currencies={fromList}
            />

            <div className="flex justify-center -my-1">
                <SwapButton onClick={handleSwapWithLists} />
            </div>

            <CurrencyInput
                label="to"
                selectedCurrency={toCurrency}
                onCurrencySelect={setToCurrency}
                amount={toAmount}
                onAmountChange={handleToAmountChange}
                type="to"
                currencies={toList}
            />
        </div>
        </>
    );
}

export default CurrencyConverter;
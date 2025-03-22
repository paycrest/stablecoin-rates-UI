import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';
import { cryptoCurrencies } from '../../data/cryptoCurrencies';
import { fiatCurrencies } from '../../data/fiatCurrencies';
import { CurrencyInput } from './CurrencyInput';
import { SwapButton } from './SwapButton';

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

    return (
        <div className="flex items-center bg-[#191B1F] text-white p-4 max-w-[571px] mx-auto rounded-[28px] gap-3">
            <CurrencyInput
                label="from"
                selectedCurrency={fromCurrency}
                onCurrencySelect={setFromCurrency}
                amount={fromAmount}
                onAmountChange={handleFromAmountChange}
                type="from"
                currencies={cryptoCurrencies}
            />

            <div className="flex justify-center -my-1">
                <SwapButton onClick={handleSwap} />
            </div>

            <CurrencyInput
                label="to"
                selectedCurrency={toCurrency}
                onCurrencySelect={setToCurrency}
                amount={toAmount}
                onAmountChange={handleToAmountChange}
                type="to"
                currencies={fiatCurrencies}
            />
        </div>
    );
}

export default CurrencyConverter;
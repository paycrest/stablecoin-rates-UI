import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
import { cryptoCurrencies } from "@/data/cryptoCurrencies";
import currenciesCodes from "@/data/currenciesCodes";

export const useCurrencyRates = () => {
  const [rates, setRates] = useState<any[]>([
    {
      code: "USD",
      name: "US Dollar",
      symbol: "US",
      type: "fiat",
      rate: 1,
    },
  ]);
  const [fiatCodes, setFiatCodes] = useState<{}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async (stablecoin: string = "usdt") => {
    try {
      setLoading(true);
      const res = await api.get(`/rates/${stablecoin}`);
      setRates(res.data);

      let data = res.data;

      const fiatRates = data.map((item: any) => {
        const currency = currenciesCodes.find(
          (currencyItem: any) => currencyItem.currency_code === item.fiat
        );

        return {
          code: item.fiat,
          name: currency.currency_name,
          type: "fiat",
          rate: item.sellRate,
          symbol: currency.country_code,
        };
      });

      setRates(fiatRates);

      const codes = fiatRates.reduce((acc, item) => {
        const country = currenciesCodes.find(
          (countryItem) => countryItem.currency_code === item.code
        );
        return { ...acc, [item.code]: country.country_code };
      }, {});

      setFiatCodes(codes);
    } catch (err) {
      console.log(err);

      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return {
    rates,
    loading,
    error,
    cryptoCurrencies,
    fiatCurrencies: rates,
    fiatCodes,
    refreshRates: fetchRates,
  };
};

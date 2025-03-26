import { Currency } from '../types/currency';

export const fiatCurrencies: Currency[] = [
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    type: 'fiat',
    flag: '🇺🇸',
    rate: 1
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    type: 'fiat',
    flag: '🇪🇺',
    rate: 0.92
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    type: 'fiat',
    flag: '🇬🇧',
    rate: 0.79
  },
  {
    code: 'MKD',
    name: 'Macedonian Denar',
    symbol: 'ден',
    type: 'fiat',
    flag: '🇲🇰',
    rate: 56.84
  },
  {
    code: 'MMK',
    name: 'Myanmar Kyat',
    symbol: 'K',
    type: 'fiat',
    flag: '🇲🇲',
    rate: 2093.96
  },
  {
    code: 'ALL',
    name: 'Albanian Lek',
    symbol: 'L',
    type: 'fiat',
    flag: '🇦🇱',
    rate: 95.77
  },
  {
    code: 'ARS',
    name: 'Argentine Peso',
    symbol: '$',
    type: 'fiat',
    flag: '🇦🇷',
    rate: 824.50
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    type: 'fiat',
    flag: '🇦🇺',
    rate: 1.52
  }
]; 
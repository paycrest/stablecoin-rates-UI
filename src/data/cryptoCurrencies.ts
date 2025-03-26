import { Currency } from '../types/currency';

export const cryptoCurrencies: Currency[] = [
  {
    code: 'USDT',
    name: 'USD Tether',
    symbol: 'USDT',
    type: 'crypto',
    iconUrl: '/cryptoCurrencies/USDT.svg',
    rate: 1
  },
  {
    code: 'USDC',
    name: 'USD Coin',
    symbol: 'USDC',
    type: 'crypto',
    iconUrl: '/cryptoCurrencies/USDC.svg',  
    rate: 1
  },
  {
    code: 'DAI',
    name: 'DAI',
    symbol: 'DAI',
    type: 'crypto',
    iconUrl: '/cryptoCurrencies/DAI.svg',
    rate: 1
  },
  {
    code: 'BUSD',
    name: 'Binance USD',
    symbol: 'BUSD',
    type: 'crypto',
    iconUrl: '/cryptoCurrencies/BUSD.svg',
    rate: 1
  }
]; 
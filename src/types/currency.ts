export interface Currency {
  code: string;
  name: string;
  symbol: string;
  type: 'fiat' | 'crypto';
  flag?: string;
  rate: number; // Rate relative to USD
} 
export interface Currency {
  code: string;
  name: string;
  symbol: string;
  type: 'fiat' | 'crypto';
  countryCode?: string;  // ISO country code for flag icons
  iconUrl?: string;     // URL for crypto currency icons
  rate: number; // Rate relative to USD
} 
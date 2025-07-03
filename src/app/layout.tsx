import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stablecoins Rates',
  description: 'Real-time stablecoin exchange rates and currency conversion tools',
  keywords: 'stablecoin, cryptocurrency, exchange rates, USDT, USDC, DAI',
  icons: 'https://res.cloudinary.com/dfkuxnesz/image/upload/v1751520539/paycrest_dbgtr7.svg',
  authors: [{ name: 'Stablecoin Rates' }],
  openGraph: {
    title: 'Stablecoins Rate',
    description: 'Real-time stablecoin exchange rates and currency conversion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stablecoins Rate',
    description: 'Real-time stablecoin exchange rates and currency conversion tools',
    images: 'https://res.cloudinary.com/dfkuxnesz/image/upload/v1751520665/Screenshot_2025-07-03_at_06.30.46_bxx3v1.png'
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-background min-h-screen flex flex-col relative pb-32">
          {children}
        </div>
      </body>
    </html>
  )
} 
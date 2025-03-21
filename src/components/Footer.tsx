import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="w-full footer-background text-[#444444] py-8 text-center fixed bottom-0">
      <div className="max-w-2xl mx-auto px-4">
        <p className="text-base leading-6">
          Prices are aggregated from different sources
          <br />
          and displayed as an equivalent average
          <br />
          across the best rates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full footer-background py-8 text-center mt-auto"
      style={{ color: "var(--color-footer-text)" }}
    >
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
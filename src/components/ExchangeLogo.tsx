import { useState, useEffect } from 'react';

interface ExchangeLogoProps {
  src: string;
  alt: string;
  exchangeName: string;
  curveOffset: number;
  index: number;
  isHoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const ExchangeLogo = ({
  src,
  alt,
  exchangeName,
  curveOffset,
  index,
  isHoveredIndex,
  setHoveredIndex,
}: ExchangeLogoProps) => {
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    if (isTapped) {
      const timer = setTimeout(() => setIsTapped(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isTapped]);

  const isHovered = isHoveredIndex === index;

  // Calculate translateX to push logos away when another is hovered
  const isAnotherHovered = isHoveredIndex !== null && isHoveredIndex !== index;
  const translateX = isAnotherHovered
    ? index < isHoveredIndex
      ? -20 // Push left if this logo is before the hovered one
      : 20 // Push right if this logo is after the hovered one
    : 0;

  return (
    <div
      className="relative flex items-center justify-center w-20 h-20 transition-all duration-300 z-50"
      style={{
        transform: `translateY(${curveOffset}px) translateX(${translateX}px)`,
        zIndex: isHovered ? 100 : 50, // Ensure hovered logo is on top
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setIsTapped(true)} // Tap-to-clear for mobile
      role="button"
      tabIndex={0}
      aria-label={`View ${exchangeName} logo`}
    >
        <div className={`relative flex items-center justify-center  bg-background w-[35px] h-[35px] rounded-full ${isHovered || isTapped ? 'border-2 border-white/10' : ''}`}>
        {(isHovered || isTapped) && (
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 -translate-1.5"
          >
            <path
              d="M1 33.7955V38H5.20455M1 5.20455V1H5.20455M33.7955 1H38V5.20455M33.7955 38H38V33.7955"
              stroke="white"
              strokeWidth="1.23582"
            />
          </svg>
        )}

        <img
          src={src}
          alt={alt}
          className={`object-contain w-[29px] h-[29px] rounded-full transition-all duration-300 relative z-50  ${
            isHovered || isTapped
              ? 'scale-110 filter-none border-2 border-black'
              : 'scale-100 blur-xs'
          }`}
        />
      </div>
      {(isHovered || isTapped) && (
        <span className="absolute -bottom-10 text-lg text-[#7132F5] text-nowrap">
          {exchangeName}
        </span>
      )}
    </div>
  );
};

export default ExchangeLogo;
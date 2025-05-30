import ExchangeLogo from "./ExchangeLogo";
import { exchanges } from "@/data/exchanges";
import { useState } from "react";
import Curveline from "@/assets/exchanges/curveline.svg";
import { Exchange } from "@/types";

const ExchangeView: React.FC<{}> = () => {
  const [isHoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const calculateCurveOffset = (index: number, total: number) => {
    const position = (index - (total - 1) / 2) / ((total - 1) / 2);
    const amplitude = -10;
    return amplitude * position * position;
  };

  // Calculate total width of the logos container
  const logoWidth = 40;
  const spacing = -10;
  const totalLogos = exchanges.length;
  const totalWidth = logoWidth * totalLogos + spacing * (totalLogos - 1);

  // Generate points for the path
  const points: { x: number; y: number }[] = [];
  const steps = 50;
  for (let i = 0; i <= steps; i++) {
    const position = (i / steps) * 2 - 1;
    const x = (i / steps) * totalWidth;
    const y = -20 * position * position;
    points.push({ x, y: y + 50 });
  }

  // Create the SVG path
  const pathD = points
    .map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      return `L ${point.x} ${point.y}`;
    })
    .join(" ");

  return (
    <div className="relative flex justify-center">
      <div className="flex justify-center items-end -space-x-2 sm:-space-x-3 md:-space-x-4 z-50">
        {exchanges.map((exchange: Exchange, index: number) => {
          const curveOffset = calculateCurveOffset(index, exchanges.length);
          return (
            <ExchangeLogo
              key={exchange.name}
              src={exchange.logoSrc}
              alt={exchange.alt}
              exchangeName={exchange.name}
              curveOffset={curveOffset}
              index={index}
              isHoveredIndex={isHoveredIndex}
              setHoveredIndex={setHoveredIndex}
              tappedIndex={tappedIndex}
              setTappedIndex={setTappedIndex}
            />
          );
        })}
        <img
          src={Curveline}
          alt="hline"
          className="absolute 2xl:-top-[54rem] xl:-top-[48rem] lg:-top-[38rem] md:-top-[30rem] -top-[15rem] hidden md:block z-0 top-element"
        />
      </div>
      {/* Dynamic SVG Dashed Line */}
      {/* <svg
          className="absolute -top-10 min-h-48 stroke-white/50 z-0 block md:hidden"
          width={totalWidth}
          style={{ transform: 'translateX(-50%)', left: '50%' }}
      >
          <path
              d={pathD}
              className="stroke-white/50"
              fill="none"
              strokeWidth="2"
              strokeDasharray="5,5"
          >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="2s"
                repeatCount="indefinite"
              />
          </path>
      </svg> */}
    </div>
  );
};

export default ExchangeView;

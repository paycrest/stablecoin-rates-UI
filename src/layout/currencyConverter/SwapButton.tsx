import Image from "next/image";

interface SwapButtonProps {
  onClick: () => void;
}

export const SwapButton: React.FC<
  SwapButtonProps
> = ({
  onClick
}) => {
    return (
        <div className="flex justify-center -my-1">
          <button
            onClick={onClick}
            className="bg-white/10  p-2 !rounded-lg hover:bg-[#3C3C3E] transition-colors w-10 h-12 md:w-9 md:h-9 cursor-pointer "
          >
            <Image src='https://res.cloudinary.com/dfkuxnesz/image/upload/v1752208869/arrow-data-transfer-horizontal-round_khq5q0.svg' alt="swap" width={20} height={20}  />
          </button>
        </div>
      );
}
import { ArrowLeftRight } from 'lucide-react';

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
            className="bg-[#2C2C2E] p-2 !rounded-lg hover:bg-[#3C3C3E] transition-colors w-10 h-12 md:w-9 md:h-9 cursor-pointer "
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>
        </div>
      );
}
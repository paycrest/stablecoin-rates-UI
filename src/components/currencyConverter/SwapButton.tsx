import { ArrowLeftRight } from 'lucide-react';

interface SwapButtonProps {
  onClick: () => void;
}

export function SwapButton({ onClick }: SwapButtonProps) {
    return (
        <div className="flex justify-center -my-1">
          <button
            onClick={onClick}
            className="bg-[#2C2C2E] p-2 !rounded-lg hover:bg-[#3C3C3E] transition-colors w-9 h-9"
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>
        </div>
      );
}
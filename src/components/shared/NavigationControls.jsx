import { ChevronLeft, ChevronRight } from "lucide-react";

function NavigationControls({
  onPrevious,
  onNext,
  isPreviousDisabled = false,
  isNextDisabled = false,
  children,
  className = ""
}) {
  const buttonClass =
    "pointer-events-auto flex h-8 w-8 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-full border border-stone-300 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button className={buttonClass}
        type="button" onClick={onPrevious}
        disabled={isPreviousDisabled}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {children}

      <button className={buttonClass}
        type="button" onClick={onNext}
        disabled={isNextDisabled}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default NavigationControls;

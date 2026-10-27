import { ChevronLeft, ChevronRight } from "lucide-react";

function NavigationControls({ currentPage, totalPages, onPageChange }) {
  const btnClass =
    "cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white shadow-xs transition hover:bg-amber-700 hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-stone-400";

  // Navigation handlers
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={btnClass}
        aria-label="Previous Page"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Info */}
      <p className="min-w-24 text-center text-sm font-medium text-stone-600">
        Page {currentPage} of {totalPages}
      </p>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={btnClass}
        aria-label="Next Page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default NavigationControls;

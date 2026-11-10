import { useState, useEffect } from "react";

function usePagination(sortedProducts = []) {
  // Pagination
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // scroll when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Change pages function
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / productsPerPage),
  );

  // Resets the pages number when products or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortedProducts]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
  };
}

export default usePagination;

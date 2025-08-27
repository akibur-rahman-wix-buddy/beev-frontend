import React, { useState, useEffect } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Pagination = () => {
  const [currentPagePagination, setCurrentPagePagination] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const paginationTotalPages = 50;

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePreviousPagination = () => {
    if (currentPagePagination > 1) {
      setCurrentPagePagination((prev) => prev - 1);
    }
  };

  const handleNextPagination = () => {
    if (currentPagePagination < paginationTotalPages) {
      setCurrentPagePagination((prev) => prev + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPagePagination(pageNumber);
  };

  const renderPageNumbersForPagination = () => {
    const pageNumbers = [];
    const startPage = Math.max(2, currentPagePagination - 1);
    const endPage = Math.min(
      paginationTotalPages - 1,
      currentPagePagination + 1
    );

    // Always show first page
    pageNumbers.push(
      <PageButton
        key={1}
        pageNumber={1}
        isActive={currentPagePagination === 1}
        onClick={handlePageClick}
      />
    );

    // Show dots if there's a gap after first page
    if (startPage > 2) {
      pageNumbers.push(
        <span
          key="start-dots"
          className="mx-1 px-1 sm:px-2 dark:text-[#abc2d3] text-gray-500 select-none text-sm sm:text-base"
        >
          ...
        </span>
      );
    }

    // Show middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          pageNumber={i}
          isActive={currentPagePagination === i}
          onClick={handlePageClick}
        />
      );
    }

    // Show dots if there's a gap before last page
    if (endPage < paginationTotalPages - 1) {
      pageNumbers.push(
        <span
          key="end-dots"
          className="mx-1 px-1 sm:px-2 dark:text-[#abc2d3] text-gray-500 select-none text-sm sm:text-base"
        >
          ...
        </span>
      );
    }

    // Always show last page (if it's not the first page)
    if (paginationTotalPages > 1) {
      pageNumbers.push(
        <PageButton
          key={paginationTotalPages}
          pageNumber={paginationTotalPages}
          isActive={currentPagePagination === paginationTotalPages}
          onClick={handlePageClick}
        />
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
      <button
        onClick={handlePreviousPagination}
        disabled={currentPagePagination === 1}
        className={`px-2 sm:px-4 py-2 bg-transparent text-[#22352E] cursor-pointer flex items-center gap-1 sm:gap-2 text-base sm:text-xl order-1 sm:order-none ${
          currentPagePagination === 1 ? "bg-gray-200 !text-gray-400" : ""
        }`}
      >
        <IoArrowBack className="text-sm sm:text-base" />
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>
      <div className="flex gap-[3px] sm:gap-[5px] lg:gap-[8px] order-2 sm:order-none">
        {renderPageNumbersForPagination()}
      </div>
      <button
        onClick={handleNextPagination}
        disabled={currentPagePagination === paginationTotalPages}
        className={`px-2 sm:px-4 py-2 bg-transparent text-[#22352E] cursor-pointer flex items-center gap-1 sm:gap-2 text-base sm:text-xl order-3 sm:order-none ${
          currentPagePagination === paginationTotalPages
            ? "bg-gray-200 !text-gray-400"
            : ""
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">Next</span>
        <IoArrowForward className="text-sm sm:text-base" />
      </button>
    </div>
  );
};

export default Pagination;

export const PageButton = ({ pageNumber, isActive, onClick }) => (
  <button
    onClick={() => onClick(pageNumber)}
    className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg font-medium transition-colors duration-300 ease-in-out cursor-pointer text-sm sm:text-base ${
      isActive
        ? "bg-primary text-white shadow-lg"
        : "text-[#22352E] hover:bg-primary/80 hover:text-white"
    }`}
  >
    {pageNumber}
  </button>
);

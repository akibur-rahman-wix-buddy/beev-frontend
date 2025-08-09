import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Pagination = () => {
  const [currentPagePagination, setCurrentPagePagination] = useState(1);

  const paginationTotalPages = 50;

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

    pageNumbers.push(
      <PageButton
        key={1}
        pageNumber={1}
        isActive={currentPagePagination === 1}
        onClick={handlePageClick}
      />
    );

    if (startPage > 2) {
      pageNumbers.push(
        <span
          key="start-dots"
          className="mx-1 px-2 dark:text-[#abc2d3] text-gray-500 select-none"
        >
          ...
        </span>
      );
    }

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

    if (endPage < paginationTotalPages - 1) {
      pageNumbers.push(
        <span
          key="end-dots"
          className="mx-1 px-2 dark:text-[#abc2d3] text-gray-500 select-none"
        >
          ...
        </span>
      );
    }

    pageNumbers.push(
      <PageButton
        key={paginationTotalPages}
        pageNumber={paginationTotalPages}
        isActive={currentPagePagination === paginationTotalPages}
        onClick={handlePageClick}
      />
    );

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center flex-col sm:flex-row md:flex-col lg:flex-row mt-4 py-7 pb-14 gap-16">
      <button
        onClick={handlePreviousPagination}
        disabled={currentPagePagination === 1}
        className={`px-4 py-2 bg-transparent text-[#22352E] cursor-pointer flex items-center gap-2 text-xl ${
          currentPagePagination === 1 ? "bg-gray-200 !text-gray-400" : ""
        }`}
      >
        <IoArrowBack /> Previous
      </button>
      <div className="flex gap-[5px] sm:gap-[8px]">
        {renderPageNumbersForPagination()}
      </div>
      <button
        onClick={handleNextPagination}
        disabled={currentPagePagination === paginationTotalPages}
        className={`px-4 py-2 bg-transparent text-[#22352E] cursor-pointer flex items-center gap-2 text-xl ${
          currentPagePagination === paginationTotalPages
            ? "bg-gray-200 !text-gray-400"
            : ""
        }`}
      >
        Next
        <IoArrowForward />
      </button>
    </div>
  );
};

export default Pagination;

export const PageButton = ({ pageNumber, isActive, onClick }) => (
  <button
    onClick={() => onClick(pageNumber)}
    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ease-in-out cursor-pointer ${
      isActive
        ? "bg-primary text-white shadow-lg"
        : "text-[#22352E] hover:bg-primary/80 hover:text-white"
    }`}
  >
    {pageNumber}
  </button>
);

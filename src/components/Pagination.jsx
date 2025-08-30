"use client";
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, pageSize, onPageSizeChange }) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-2">{currentPage} / {totalPages}</span>
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <select
        className="ml-4 px-2 py-1 border rounded"
        value={pageSize}
        onChange={e => onPageSizeChange(Number(e.target.value))}
      >
        {[5, 10, 20, 30, 50].map(size => (
          <option key={size} value={size}>{size} per page</option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;

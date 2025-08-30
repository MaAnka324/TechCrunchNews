"use client";
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Callback to update totalPages from NewsList
  const handleTotalPages = (pages: number) => {
    setTotalPages(pages);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // сбросить на первую страницу при смене размера
  };

  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <SearchBar />
      <CategoryFilter />
      <NewsList page={currentPage} pageSize={pageSize} setTotalPages={handleTotalPages} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}

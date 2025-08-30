"use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../store/newsSlice';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setQuery(input));
  };

  const handleClear = () => {
    setInput('');
    dispatch(setQuery(''));
  };

  return (
    <div className="flex items-center justify-start w-full gap-2">
      <h1 className="text-5xl font-bold mb-2">World News</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-white bg-transparent text-white px-2 py-2 rounded w-full max-w-md"
        placeholder="NASA"
      />
      <button
        onClick={handleSearch}
        className="border border-white bg-transparent text-white px-2 py-2 rounded transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-gray-200 active:text-black"
      >
        Search
      </button>
      <button
        onClick={handleClear}
        className="border border-white bg-transparent text-white px-2 py-2 rounded transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-gray-200 active:text-black"
      >
        Clear
      </button>
    </div>
  );
}

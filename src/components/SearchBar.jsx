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

  return (
    <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-white bg-transparent text-white px-2 py-2 rounded"
        />
      <button
        onClick={handleSearch}
        className="border border-white bg-transparent text-white px-2 py-2 rounded ml-2 transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-gray-200 active:text-black"
      >
        Search
      </button>
    </div>
  );
}

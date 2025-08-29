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
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

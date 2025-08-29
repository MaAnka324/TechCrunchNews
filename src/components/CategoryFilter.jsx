"use client";
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/newsSlice';

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const categories = ['general', 'business', 'technology', 'sports', 'health'];

  return (
    <div>
      {categories.map((cat) => (
        <button key={cat} onClick={() => dispatch(setCategory(cat))}>
          {cat}
        </button>
      ))}
    </div>
  );
}

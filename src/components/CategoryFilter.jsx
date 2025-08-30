"use client";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, getNews } from '../store/newsSlice';

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  const query = useSelector((state) => state.news.query);
  const activeCategory = useSelector((state) => state.news.category);

  return (
    <div className="flex w-full justify-between gap-2 mt-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            dispatch(setCategory(cat));
            dispatch(getNews({ category: cat, query }));
          }}
          className={
            `flex-1 border border-white px-2 py-2 rounded transition-all duration-200 ml-0
            ${activeCategory === cat ? 'bg-white text-black scale-105' : 'bg-transparent text-white'}
            hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-gray-200 active:text-black`
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

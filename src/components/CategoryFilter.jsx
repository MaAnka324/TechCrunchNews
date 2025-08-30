"use client";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, getNews } from '../store/newsSlice';

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const categories = ['general', 'business', 'technology', 'sports', 'health'];
  const query = useSelector((state) => state.news.query);

  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            dispatch(setCategory(cat));
            dispatch(getNews({ category: cat, query }));
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

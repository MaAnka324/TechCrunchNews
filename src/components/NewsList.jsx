"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../store/newsSlice';
import NewsItem from './NewsItem';

export default function NewsList() {
  const dispatch = useDispatch();
  const { articles, status, category, query } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews({ category, query }));
  }, [dispatch, category, query]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading news</p>;

  return (
    <div>
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../store/newsSlice';
import NewsItem from './NewsItem';

export default function NewsList({ page = 1, pageSize = 20, setTotalPages }) {
  const dispatch = useDispatch();
  const { articles, status, category, query } = useSelector((state) => state.news);
  const [totalResults, setTotalResults] = React.useState(0);

  useEffect(() => {
    const fetch = async () => {
      const result = await dispatch(getNews({ category, query, page, pageSize }));
      // result.payload может быть массивом статей, но нужен totalResults
      if (result.payload && result.payload.totalResults) {
        setTotalResults(result.payload.totalResults);
        if (setTotalPages) {
          setTotalPages(Math.ceil(result.payload.totalResults / pageSize));
        }
      } else if (setTotalPages) {
        setTotalPages(1);
      }
    };
    fetch();
  }, [dispatch, category, query, page, pageSize, setTotalPages]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading news</p>;

  return (
    <div>
      {Array.isArray(articles)
        ? articles.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))
        : null}
    </div>
  );
}

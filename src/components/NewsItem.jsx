"use client";
export default function NewsItem({ article }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank">Read more</a>
    </div>
  );
}

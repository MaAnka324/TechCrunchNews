"use client";
export default function NewsItem({ article }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div style={{ fontSize: '0.95em', color: '#a5a1a1ff', marginBottom: '6px' }}>
        {article.author && <span>Author: {article.author} | </span>}
        {article.source?.name && <span>Source: {article.source.name} | </span>}
        {article.publishedAt && <span>Date: {new Date(article.publishedAt).toLocaleDateString()}</span>}
      </div>
  <a href={article.url} target="_blank" style={{ color: '#284482ff' }}>Read more</a>
    </div>
  );
}

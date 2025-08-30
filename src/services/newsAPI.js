import axios from 'axios';


const API_KEY = '92d3552b35584951add4efc0e093a3e4';
const BASE_URL = 'https://newsapi.org/v2';


/**
 * Universal NewsAPI fetcher
 * @param {Object} options - Filtering options
 * @param {'top-headlines'|'everything'} [options.endpoint='top-headlines'] - API endpoint
 * @param {string} [options.q] - Search query
 * @param {string} [options.category] - Category (top-headlines)
 * @param {string} [options.country] - Country (top-headlines)
 * @param {string} [options.sources] - Sources (top-headlines)
 * @param {string} [options.domains] - Domains (everything)
 * @param {string} [options.from] - Date from (everything)
 * @param {string} [options.to] - Date to (everything)
 * @param {string} [options.sortBy] - Sort by (everything)
 * @param {number} [options.pageSize=20] - Number of articles
 */

export const fetchNews = async (options = {}) => {
  const {
    endpoint = 'top-headlines',
    q,
    category,
    country,
    sources,
    domains,
    from,
    to,
    sortBy,
    pageSize = 20,
  } = options;

  const url = `${BASE_URL}/${endpoint}`;
    const params = {
    apiKey: API_KEY,
    ...options,
    country: endpoint === 'top-headlines' ? (options.country || 'us') : options.country,
    };
    console.log(params);

  // Remove undefined params
  Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);

  try {
    const response = await axios.get(url, { params });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};

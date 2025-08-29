// /store/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/newsAPI';

// Асинхронная санка для загрузки новостей
export const getNews = createAsyncThunk(
  'news/getNews',
  async ({ category, query }) => {
    const articles = await fetchNews(category, query);
    return articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
    category: '',
    query: '',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setQuery } = newsSlice.actions;
export default newsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/newsAPI';

export const getNews = createAsyncThunk(
  'news/getNews',
  async ({ category, query, page, pageSize }) => {
    const response = await fetchNews({ category, q: query, page, pageSize });
    return response;
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
        if (action.payload && action.payload.articles) {
          state.articles = action.payload.articles;
        } else {
          state.articles = [];
        }
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setQuery } = newsSlice.actions;
export default newsSlice.reducer;

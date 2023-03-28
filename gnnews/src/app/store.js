import { configureStore } from '@reduxjs/toolkit'
import countArticlesReducer from '../features/countArticles/countArticlesSlice'
import viewModalReducer from '../features/viewModal/viewModalSlice'

export const store = configureStore({
  reducer: {
    isList: viewModalReducer,
    articles: countArticlesReducer,
  },
})
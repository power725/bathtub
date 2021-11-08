import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
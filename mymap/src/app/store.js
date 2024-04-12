import { configureStore } from '@reduxjs/toolkit';
import map from '../features/Map/mapSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    map,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

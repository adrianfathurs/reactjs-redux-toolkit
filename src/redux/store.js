import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/product'

export const store = configureStore({
  reducer: {
    product: productSlice
  },
});

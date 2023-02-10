import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import { formReducers } from './form-slice';
import { productsReducers } from './product-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    products: productsReducers.reducer,
    form: formReducers.reducer,
  },
});

export default store;

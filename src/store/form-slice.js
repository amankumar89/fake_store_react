import { createSlice } from '@reduxjs/toolkit';
import { productsActions } from './product-slice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    title: '',
    price: '',
    image: '',
    description: '',
  },
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(productsActions.addProduct, (state, action) => {
      state.title = '';
      state.price = 0;
      state.image = '';
      state.description = '';
    });
  },
});

export const formActions = formSlice.actions;
export const formReducers = formSlice;

import { createSlice, nanoid } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    replaceProduct(state, action) {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    addProduct(state, action) {
      const newItems = action.payload;
      state.data.unshift({
        id: nanoid(),
        title: newItems.title,
        price: newItems.price,
        image: newItems.image,
        description: newItems.description,
      });
    },
    removeProduct(state, action) {
      const id = action.payload;
      state.data = state.data.filter((item) => item.id !== id);
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducers = productsSlice;

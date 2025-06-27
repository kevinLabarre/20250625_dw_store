import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      if (!state.value.find((p) => p.id === product.id)) {
        state.value.push(product);
      }
    },
    deleteProduct: (state, action) => {
      const product = action.payload;

      state.value = state.value.filter((p) => p.id !== product.id);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Avec Redux toolkit, je peux directement modifier l'état
      // C'est redux toolkit qui s'occupera de copier le state, puis de renvoyer la copie modifiée
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // Quand, côté composant, j'appelle ce reducer avec 'dispatch(incrementByAmount(10))'
      // Alors, action.payload sera égale à 10
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

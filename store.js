import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./src/redux/slices/counterSlice";
import cartSlice from "./src/redux/slices/cartSlice";

export default configureStore({
  // Attention à l'import !
  // L'import automatique importe en utilisant la destructuration
  // Si on utilise l'import automatique, enlever les '{ }'
  reducer: {
    count: counterSlice,
    cart: cartSlice,
  },
});

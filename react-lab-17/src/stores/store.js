import { configureStore } from "@reduxjs/toolkit";
import fruitsReducer from "./features/fruits/fruitsSlice";

export const store = configureStore({
  reducer: {
    fruits: fruitsReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFruitsList: ["Alma", "Banan", "Portagal"],
  selectedFruitsList: [],
};

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    selectFruit: (state, action) => {
      if (state.selectedFruitsList.find((fruit) => fruit === action.payload)) {
        const index = state.selectedFruitsList.indexOf(action.payload);
        if (index > -1) {
          state.selectedFruitsList.splice(index, 1);
        }
      } else state.selectedFruitsList.push(action.payload);
    },
    selectAllFruits: (state) => {
      state.selectedFruitsList = [...state.allFruitsList];
    },
    deselectAllFruits: (state) => {
      state.selectedFruitsList = [];
    },
  },
});

export const { selectFruit, selectAllFruits, deselectAllFruits } = fruitsSlice.actions;

export default fruitsSlice.reducer;

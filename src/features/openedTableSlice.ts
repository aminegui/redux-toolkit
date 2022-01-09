import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OpenedTableState {
  value: [{ gest: string; food: string[] }];
}
interface OpenedTable {
  gest: string;
  food: string[];
}
interface NewFoodList {
    index: number,
    food: string
}
const initialState: OpenedTableState = {
  value: [{ gest: "", food: [] }],
};

export const openedTableSlice = createSlice({
  name: "openedTable",
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<OpenedTable>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<NewFoodList>) => {
        const {index, food} = action.payload
        state.value[index].food.push(food)
      },
  },
});

// Action creators are generated for each case reducer function
export const { addTable, addFood } = openedTableSlice.actions;

export default openedTableSlice.reducer;

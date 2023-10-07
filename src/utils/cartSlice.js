import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      // console.log(action);
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.splice(action.payload,1)
    },
    clearcart: (state, action) => {
      state.items = [];
    },
  },
});

console.log(cartSlice);

export const { additem, removeitem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;

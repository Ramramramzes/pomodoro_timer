import { createSlice } from "@reduxjs/toolkit";

interface ISelect{
  isOpen: boolean;
}

const initialState: ISelect = {
  isOpen: false,
}

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectState: (state) => {
      state.isOpen = !state.isOpen
    },
  }
})

export const { selectState } = selectSlice.actions
export default selectSlice.reducer
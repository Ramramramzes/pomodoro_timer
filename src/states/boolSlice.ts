import { createSlice } from "@reduxjs/toolkit"

interface IBoolState {
  reduct: boolean,
}

const initialState:IBoolState = {
  reduct: false
}

const boolSlice = createSlice({
  name: "booleanStates",
  initialState,
  reducers: {
    red_btn: (state) => {
      state.reduct = !state.reduct;
    }
  }
})


export const {red_btn} = boolSlice.actions
export default boolSlice.reducer
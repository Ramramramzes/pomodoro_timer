import { createSlice } from "@reduxjs/toolkit";

interface IActiveChangeState{
  value: boolean;
}

const initialState:IActiveChangeState = {
  value: false,
}

const activeChangeSlice = createSlice({
  name: "activeChange",
  initialState,
  reducers:{
    change_active:(state)=> {
      state.value = !state.value;
    }
  }
})

export const { change_active } = activeChangeSlice.actions
export default activeChangeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

interface ITaskInputState{
  value: string;
}

const initialState: ITaskInputState ={
  value: ""
}

export const taskInputSlice = createSlice({
  name: "inputChange",
  initialState,
  reducers:{
    change: (state,action) => {
      state.value = action.payload
    }
  }
})

export const { change } = taskInputSlice.actions
export default taskInputSlice.reducer
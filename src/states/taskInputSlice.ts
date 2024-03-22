import { createSlice } from "@reduxjs/toolkit";

interface ITaskInputState{
  value: string;
  forChange: string;
}

const initialState: ITaskInputState ={
  value: "",
  forChange: ""
}

export const taskInputSlice = createSlice({
  name: "inputChange",
  initialState,
  reducers:{
    change: (state,action) => {
      state.value = action.payload
    },
    forchange: (state,action) => {
      state.forChange = action.payload;
    }


  }
})

export const { change, forchange } = taskInputSlice.actions
export default taskInputSlice.reducer
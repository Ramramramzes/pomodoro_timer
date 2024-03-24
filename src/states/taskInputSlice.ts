import { createSlice } from "@reduxjs/toolkit";

interface ITaskInputState{
  value: string;
  forChange: string;
  popupState: boolean;
}

const initialState: ITaskInputState ={
  value: "",
  forChange: "",
  popupState: false,
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
    },
    openPopup: (state) => {
      state.popupState = !state.popupState;
    },


  }
})

export const { change, forchange, openPopup } = taskInputSlice.actions
export default taskInputSlice.reducer
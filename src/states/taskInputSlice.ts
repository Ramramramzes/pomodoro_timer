import { createSlice } from "@reduxjs/toolkit";

interface ITaskInputState{
  value: string;
  forChange: string;
  popupState: boolean;
  textState: boolean;
}

const initialState: ITaskInputState ={
  value: "",
  forChange: "",
  popupState: false,
  textState: false,
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
    hideText: (state) => {
      state.textState = !state.textState
    }


  }
})

export const { change, forchange, openPopup, hideText } = taskInputSlice.actions
export default taskInputSlice.reducer
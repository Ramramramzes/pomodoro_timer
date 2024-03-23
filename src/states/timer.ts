import { createSlice } from "@reduxjs/toolkit";

interface ITimerState{
  value:{
    userTime: number;
  }
}

const initialState:ITimerState = {
  value:{
    userTime: 25,
  }
}

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers:{
    addMinute: (state) => {
      state.value.userTime += 1
    }
  }
})

export const { addMinute } = timerSlice.actions
export default timerSlice.reducer
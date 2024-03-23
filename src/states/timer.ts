import { createSlice } from "@reduxjs/toolkit";

interface ITimerState{
  userTime: number,
  breakTime: number,
  workActive: boolean,
  breakActive: boolean,
  bigBreakActive: boolean,
  bigBrakeTime: number,
  tomatoCount: number,
  rounds: number,
}

const initialState:ITimerState = {
  userTime: 0.01,
  breakTime: 0.01,
  bigBrakeTime: 0.1,
  workActive: true,
  bigBreakActive: false,
  breakActive: false,
  tomatoCount: 0,
  rounds:0,
}

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers:{
    addWorkMinute: (state) => {
      state.userTime += 1
    },
    addBreakeMinute: (state) => {
      state.breakTime += 1
    },
    addBigBreakeMinute: (state) => {
      state.bigBrakeTime += 1
    },
    changeWork: (state,action) => {
      state.workActive = action.payload
    },
    changeBreak: (state,action) => {
      state.breakActive = action.payload
    },
    changeBigBreak: (state,action) => {
      state.bigBreakActive = action.payload
    },
    addTomato: (state) => {
      state.tomatoCount += 1
    },
    startTomato: (state) => {
      state.tomatoCount = 0
    },
    addRound: (state) => {
      state.rounds += 1
    }
  }
})

export const { addWorkMinute, changeWork, changeBreak, changeBigBreak, addBreakeMinute, addBigBreakeMinute, addTomato, startTomato, addRound} = timerSlice.actions
export default timerSlice.reducer
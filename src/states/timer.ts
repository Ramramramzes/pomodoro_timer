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
  isRuning: boolean,
  minutes:number,
  seconds: number,
}




const initialState:ITimerState = {
  userTime: 0.1,
  breakTime: 0.1,
  bigBrakeTime: 0.1,
  workActive: true,
  bigBreakActive: false,
  breakActive: false,
  tomatoCount: 0,
  rounds:0,
  isRuning: false,
  minutes: 0,
  seconds: 0,
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
    remWorkMinute: (state) => {
      state.userTime = state.userTime <= 0 ? 0 : state.userTime -= 1
    },
    remBreakeMinute: (state) => {
      state.breakTime = state.breakTime <= 0 ? 0 : state.breakTime -= 1
    },
    remBigBreakeMinute: (state) => {
      state.bigBrakeTime = state.bigBrakeTime <= 0 ? 0 : state.bigBrakeTime -= 1
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
    },

    setIsRuning: (state,action) => {
      state.isRuning = action.payload
    },
    setMin: (state,action) => {
      state.minutes = action.payload
    },
    setSec: (state,action) => {
      state.seconds = action.payload
    },
  }
})

export const { addWorkMinute, changeWork, changeBreak, changeBigBreak, addBreakeMinute, addBigBreakeMinute, addTomato, startTomato, addRound, setIsRuning, remWorkMinute , remBreakeMinute, remBigBreakeMinute, setMin, setSec} = timerSlice.actions
export default timerSlice.reducer
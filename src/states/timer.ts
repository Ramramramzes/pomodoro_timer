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
  pauseState: boolean,
  isRuning: boolean,
  forStatistic: {
    pauseStart: number,
    pauseEnd: number,
    pauseResult: number,
  }
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
  pauseState: false,
  isRuning: false,
  forStatistic: {
    pauseStart: 0,
    pauseEnd: 0,
    pauseResult: 0,
  },
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
    pauseState: (state,action) => {
      state.pauseState = action.payload
    },
    setPauseStart: (state,action) => {
      state.forStatistic.pauseStart = action.payload
    },
    setPauseEnd: (state,action) => {
      state.forStatistic.pauseEnd = action.payload
    },
    setPausesResult: (state,action) => {
      state.forStatistic.pauseResult = state.forStatistic.pauseResult + action.payload
    },
    setIsRuning: (state,action) => {
      state.isRuning = action.payload
    },
    
  }
})

export const { addWorkMinute, changeWork, changeBreak, changeBigBreak, addBreakeMinute, addBigBreakeMinute, addTomato, startTomato, addRound, pauseState, setPauseStart, setPauseEnd, setPausesResult, setIsRuning, remWorkMinute , remBreakeMinute, remBigBreakeMinute } = timerSlice.actions
export default timerSlice.reducer
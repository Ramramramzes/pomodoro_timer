import { createSlice } from "@reduxjs/toolkit"

interface day{
  name: string, //Понедельник
  workTime: number[], // Рабочее время
  breakTime: number[], // Время отдыха
  tomatoes: number, // Кол-во помидоров
  focus: number, // % Фокус = рабочее время / выполненные задачи
  pauseTime: number[], // Время общих пауз
  stops: number, //Кол-во стопов
  readyTask: number, //Кол-во готовых задани
}

interface IForStatistic{
  pauseStart: number,
  pauseState: boolean,
  curWeek: day[],
  lastWeek: day[],
  pastWeek: day[],
}

const initialWeek = [
  {
    "name": "Воскресенье",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Понедельник",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Вторник",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Среда",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Четверг",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Пятница",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Суббота",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
]

const initialState:IForStatistic = {
  pauseStart: 0,
  pauseState: false,
  curWeek: initialWeek,
  lastWeek: initialWeek,
  pastWeek: initialWeek,
}

const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    pauseState: (state,action) => {
      state.pauseState = action.payload
    },
    setPauseStart: (state,action) => {
      state.pauseStart = action.payload
    },
    setPausesResult: (state,action) => {
      state.curWeek[action.payload.dayNum].pauseTime.push(action.payload.number)
    },
    readyTasks: (state,action) => {
      state.curWeek[action.payload].readyTask += 1;
    },
    setTomatosForStat: (state,action) => {
      state.curWeek[action.payload.dayNum].tomatoes = action.payload.result
    },
    setWorkTime: (state,action) => {
      state.curWeek[action.payload.dayNum].workTime.push(action.payload.number)
    },
    setFocus: (state,action) => {
      state.curWeek[action.payload.dayNum].focus = action.payload.focus;
    },
    setStopCount: (state,action) => {
      state.curWeek[action.payload].stops += 1;
    },
    setBreakTime: (state,action) => {
      state.curWeek[action.payload.dayNum].breakTime.push(action.payload.number)
    },

  }

})


export const { pauseState , setPauseStart, setPausesResult, readyTasks, setTomatosForStat, setWorkTime, setFocus, setStopCount, setBreakTime, } = statisticSlice.actions
export default statisticSlice.reducer
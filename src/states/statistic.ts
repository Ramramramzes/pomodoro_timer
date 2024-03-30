import { createSlice } from "@reduxjs/toolkit"

interface day{
  name: string, //Понедельник
  workTime: number[], // Рабочее время
  tomatoes: number, // Кол-во помидоров
  focus: number, // % Фокус = рабочее время / выполненные задачи
  pauseTime: number, // Время общих пауз
  stops: number, //Кол-во стопов
  readyTask: number, //Кол-во готовых задани
}

interface IForStatistic{
  pauseStart: number,
  pauseEnd: number,
  pauseResult: number,
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
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Понедельник",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Вторник",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Среда",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Четверг",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Пятница",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
  {
    "name": "Суббота",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": 0,
    "stops": 0,
    "workTime": [],
    "readyTask": 0,
  },
]

const initialState:IForStatistic = {
  pauseStart: 0,
  pauseEnd: 0,
  pauseResult: 0,
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
    setPauseEnd: (state,action) => {
      state.pauseEnd = action.payload
    },
    setPausesResult: (state,action) => {
      state.pauseResult = state.pauseResult + action.payload
    },
    readyTasks: (state,action) => {
      state.curWeek[action.payload].readyTask += 1;
    }
  }

})


export const { pauseState , setPauseStart, setPauseEnd ,setPausesResult, readyTasks } = statisticSlice.actions
export default statisticSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
const formattedDate = `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getFullYear()}`;

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
  activeDay: number,
  activeWeek: string,
  dayForCheck: string,
  weekChangeState: boolean,
  curWeek: day[],
  lastWeek: day[],
  pastWeek: day[],
}

const initialWeek = [
  {
    "name": "Вс",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Пн",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Вт",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Ср",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Чт",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Пт",
    "tomatoes": 0,
    "focus": 0,
    "pauseTime": [],
    "stops": 0,
    "workTime": [],
    "breakTime": [],
    "readyTask": 0,
  },
  {
    "name": "Сб",
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
  activeDay: 0,
  activeWeek: 'cur',
  weekChangeState: false,
  dayForCheck: formattedDate,
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
    setActiveDay: (state,action) =>{
      state.activeDay = action.payload
    },
    setDefActive: (state) => {
      state.activeDay = 7
    },
    changeWeek: (state,action) => {
      state.activeWeek = action.payload
    },
    changeWeekState: (state) => {
      state.weekChangeState = !state.weekChangeState
    },
    newWeek: (state) => {
      state.pastWeek = state.lastWeek
      state.lastWeek = state.curWeek
      state.curWeek = initialWeek
    },
    dayCheck: (state,action) => {
      state.dayForCheck = action.payload
    }
  }

})


export const { pauseState , setPauseStart, setPausesResult, readyTasks, setTomatosForStat, setWorkTime, setFocus, setStopCount, setBreakTime, setActiveDay,setDefActive, changeWeek, newWeek, changeWeekState,dayCheck } = statisticSlice.actions
export default statisticSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./taskSlice"
import inputChangeReducer from "./taskInputSlice"
import activChangeReducer from "./activchange";
import timerReducer from "./timer"

export const store = configureStore({
  reducer:{
    taskList:taskListReducer,
    inputChange: inputChangeReducer,
    activeChange: activChangeReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./taskSlice"
import inputChangeReducer from "./taskInputSlice"
import boolStateReducer from "./boolSlice"

export const store = configureStore({
  reducer:{
    taskList:taskListReducer,
    inputChange: inputChangeReducer,
    booleanStates: boolStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
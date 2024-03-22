import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./taskSlice"
import inputChangeReducer from "./taskInputSlice"

export const store = configureStore({
  reducer:{
    taskList:taskListReducer,
    inputChange: inputChangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
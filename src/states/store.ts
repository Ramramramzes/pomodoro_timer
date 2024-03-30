import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskListReducer from "./taskSlice"
import inputChangeReducer from "./taskInputSlice"
import activChangeReducer from "./activchange";
import timerReducer from "./timer"
import darkmodeReducer from "./settings"
import hoverReducer from "./hoverStates"
import staticReducer from "./statistic"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  taskList:taskListReducer,
  inputChange: inputChangeReducer,
  activeChange: activChangeReducer,
  timer: timerReducer,
  darkmode: darkmodeReducer,
  hoverState: hoverReducer,
  statistic: staticReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
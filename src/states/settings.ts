import { createSlice } from "@reduxjs/toolkit"

interface ISettingsState{
  darkmode: boolean,
  alerts: boolean,
}

const initialState:ISettingsState = {
  darkmode: true,
  alerts: true,
}

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    darkmodeState: (state) => {
      state.darkmode = !state.darkmode
    },
    alertsToogle: (state) => {
      state.alerts = !state.alerts
    }
  }
})

export const { darkmodeState, alertsToogle } = settings.actions
export default settings.reducer
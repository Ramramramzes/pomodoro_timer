import { createSlice } from "@reduxjs/toolkit"

interface ISettingsState{
  darkmode: boolean,
}

const initialState:ISettingsState = {
  darkmode: false,
}

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    darkmodeState: (state) => {
      state.darkmode = !state.darkmode
    }
  }
})

export const { darkmodeState } = settings.actions
export default settings.reducer
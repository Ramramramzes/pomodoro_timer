import { createSlice } from "@reduxjs/toolkit"

interface IHover{
  hover:{
    statistic: boolean,
  }
}

const initialState:IHover = {
  hover: {
    statistic: false,
  }
}

const hoverSlice = createSlice({
  name: "hoverState",
  initialState,
  reducers: {
    setStatisticHover: (state) => {
      state.hover.statistic = !state.hover.statistic
    }
  }
})

export const { setStatisticHover } = hoverSlice.actions
export default hoverSlice.reducer
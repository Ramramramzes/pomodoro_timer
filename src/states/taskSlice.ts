import { createSlice } from "@reduxjs/toolkit"

interface ITaskState{
  value: string[]
}

const initialState:ITaskState = {
  value: []
}

const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers:{
    addTask: (state,action) => {
      state.value.push(action.payload)
    }
  }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer
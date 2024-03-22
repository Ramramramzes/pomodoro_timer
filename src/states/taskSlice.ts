import { createSlice } from "@reduxjs/toolkit"

interface ITaskState{
  value: string[]
}

interface IRedAction{
  payload: {
    prev: string;
    new: string;
  }
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
    },
    delTask: (state,action) => {
      let temp = 0;
      const filtered = state.value.filter((el) => {
        if (el !== action.payload) {
          return true;
        } else if (el === action.payload && temp === 0) {
          temp += 1;
          return false;
        } else {
          return true;
        }
      });
      state.value = filtered;
    },
    redTask: (state,action:IRedAction) => {
      let replaced = false;
      const filtered = state.value.map((el) => {
        if(el === action.payload.prev && replaced === false){
          replaced = true;
          return action.payload.new
        }
        return el;
      })
      state.value = filtered;
    },
  }
})

export const { addTask, delTask, redTask } = taskSlice.actions
export default taskSlice.reducer
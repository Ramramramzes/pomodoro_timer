import { createSlice } from "@reduxjs/toolkit"

interface ITaskState{
  value: {
    content: string,
    menuState: boolean,
  }[]
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
      state.value.push({content: action.payload, menuState:false})
    },
    delTask: (state,action) => {
      let temp = 0;
      const filtered = state.value.filter((el) => {
        if (el.content !== action.payload) {
          return true;
        } else if (el.content === action.payload && temp === 0) {
          temp += 1;
          return false;
        } else {
          return true;
        }
      });
      state.value = filtered;
    },
    redTask: (state, action: IRedAction) => {
      state.value = state.value.map((el) => {
        if (el.content === action.payload.prev) {
          return { ...el, content: action.payload.new };
        }
        return el;
      });
    },
    showMenu: (state,action) => {
      for (let i = 0; i < state.value.length; i++) {
        if(i == action.payload ){
          continue
        }
        state.value[i].menuState = false
      }
      state.value[action.payload].menuState = !state.value[action.payload].menuState;
    }
  }
})

export const { addTask, delTask, redTask,showMenu } = taskSlice.actions
export default taskSlice.reducer
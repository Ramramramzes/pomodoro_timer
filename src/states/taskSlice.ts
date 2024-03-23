import { createSlice } from "@reduxjs/toolkit"

interface ITaskState{
  value: {
    content: string,
    menuState: boolean,
    taskIndex:number,
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
      state.value.push({content: action.payload.content, menuState:false, taskIndex: action.payload.tastIndex})
    },
    removeFirst: (state) => {
      if(state.value.length != 0){
        const newValue = [...state.value.slice(1)];
        return { ...state, value: newValue }
      }
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

export const { addTask, delTask, redTask, showMenu, removeFirst } = taskSlice.actions
export default taskSlice.reducer
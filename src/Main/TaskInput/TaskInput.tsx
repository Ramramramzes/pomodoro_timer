// import styles from './taskinput.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { change } from "../../states/taskInputSlice";
import { useEffect } from "react";
import { addTask, redTask } from "../../states/taskSlice";
// import { TaskListItem } from "../TaskListItem";



export function TaskInput() {
  const taskInput = useSelector((state:RootState) => state.inputChange.value)
  const taskList = useSelector((state:RootState) => state.taskList.value)
  const prev = useSelector((state: RootState) => state.inputChange.forChange)

  const dispatch = useDispatch<AppDispatch>()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(change(event.target.value))
  }

  const addTaskHandler = () => {
    dispatch(addTask(taskInput))
    dispatch(change(''))
  }

  const redTaskHandler = () => {
    dispatch(redTask({prev: prev, new: taskInput}))
    dispatch(change(''))
  }

  //! временный эффект 
  useEffect(() => {
    console.log(taskList);
    
  },[taskList])

  return (
    <>
      <input  onChange={changeHandler}
              value={taskInput} 
              placeholder={taskInput ? '' : 'Название задачи'}
              type="text" />
      <button onClick={addTaskHandler}>Добавить</button>
      <button onClick={redTaskHandler}>Редактировать</button>
      
    </>
  );
}

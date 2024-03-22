// import styles from './taskinput.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { change } from "../states/taskInputSlice";
import { useEffect } from "react";



export function TaskInput() {
  const taskInput = useSelector((state:RootState) => state.inputChange.value)
  const dispatch = useDispatch<AppDispatch>()

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(change(event.target.value))
  }

  useEffect(() => {
    console.log(taskInput);
  },[taskInput])
  

  return (
    <>
      <input onChange={changeHandler} value={taskInput} type="text" />
    </>
  );
}

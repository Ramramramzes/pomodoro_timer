// import styles from './taskinput.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { change } from "../../states/taskInputSlice";
import { addTask, redTask } from "../../states/taskSlice";
import { change_active } from "../../states/activchange";



export function TaskInput() {
  const taskInput = useSelector((state:RootState) => state.inputChange.value)
  const prev = useSelector((state: RootState) => state.inputChange.forChange)
  const activeChange = useSelector((state: RootState) => state.activeChange)

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
    dispatch(change_active())
  }

  return (
    <>
      <input  onChange={changeHandler}
              value={taskInput} 
              placeholder={taskInput ? '' : 'Название задачи'}
              type="text" />
      {activeChange.value ? <button onClick={redTaskHandler}>Редактировать</button> : <button disabled={taskInput ? false : true} onClick={addTaskHandler}>Добавить</button>}
    </>
  );
}

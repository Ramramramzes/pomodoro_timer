import styles from './taskinput.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { change } from "../../states/taskInputSlice";
import { addTask, redTask } from "../../states/taskSlice";
import { change_active } from "../../states/activchange";



export function TaskInput() {
  const taskList = useSelector((state:RootState) => state.taskList)
  const taskInput = useSelector((state:RootState) => state.inputChange.value)
  const prev = useSelector((state: RootState) => state.inputChange.forChange)
  const activeChange = useSelector((state: RootState) => state.activeChange)

  const dispatch = useDispatch<AppDispatch>()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(change(event.target.value))
  }

  const addTaskHandler = () => {
    dispatch(addTask({content: taskInput, tastIndex: taskList.value.length + 1}))
    dispatch(change(''))
  }

  const redTaskHandler = () => {
    dispatch(redTask({prev: prev, new: taskInput}))
    dispatch(change(''))
    dispatch(change_active())
  }
//! ПРОДОЛЖИТЬ ТУТ
  return (
    <div className={styles.input_block}>
      <input  className={styles.input}
              onChange={changeHandler}
              value={taskInput} 
              placeholder={taskInput ? '' : 'Название задачи'}
              type="text" />
      {activeChange.value ? <button className={styles.btn + ' green_btn'} onClick={redTaskHandler}>Редактировать</button> : <button className={styles.btn + ' green_btn'} disabled={taskInput ? false : true} onClick={addTaskHandler}>Добавить</button>}
    </div>
  );
}

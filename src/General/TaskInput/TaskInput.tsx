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
  const inputChange = useSelector((state: RootState) => state.inputChange)
  const activeChange = useSelector((state: RootState) => state.activeChange)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)

  
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

  return (
    <div className={styles.input_block}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input  className={darkmode ? !activeChange.value ? styles.input : styles.input + ' greenBorder btn-animation' : !activeChange.value ? styles.input_dark : styles.input_dark + ' greenBorder btn-animation'} style={inputChange.textState ? {marginTop: '0%'} : {}}
                onChange={changeHandler}
                value={taskInput} 
                placeholder={taskInput ? '' : 'Название задачи'}
                type="text" />
        {activeChange.value ? <input type="submit" value='Применить' className={styles.btn + ' green_btn'} onClick={redTaskHandler}></input> : <input type="submit" value='Добавить' className={styles.btn + ' green_btn btn-animation'} disabled={taskInput ? false : true} onClick={addTaskHandler}></input>}
      </form>
    </div>
  );
}

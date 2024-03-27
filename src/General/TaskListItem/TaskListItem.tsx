import styles from './tasklistitem.module.css'
import { useSelector,useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { MenuBtn } from "./MenuBtn";
import { pushUp, showMenu } from "../../states/taskSlice";
import { change } from "../../states/taskInputSlice";
import { change_active } from "../../states/activchange";
import { ArrowDown, Dots } from "../../img/images";

export function TaskListItem() {
  const taskList = useSelector((state:RootState) => state.taskList.value)
  const activeChange = useSelector((state: RootState) => state.activeChange)
  const dispatch = useDispatch<AppDispatch>();

  const settingsItemHandler = (index:number) => {
    dispatch(showMenu(index))
    dispatch(change(''))
    if(activeChange.value){
      dispatch(change_active());
    }
  }

  return (
    <ul id='task_list' className={styles.list}>
      {taskList && taskList.map((el,index) => {
        return  <li className={styles.item + ' btn-animation'}
                    key={index}>
                    <div className={styles.index_content}>
                      <div className={styles.circle_container}>
                        <span className={styles.number}>{index + 1}</span>
                      </div>
                      {index == 0 ? <span className={styles.task_text} style={{fontSize:`${el.listFontSize + 2}`+'px',color: 'var(--app-green)'}}>{el.content}</span> : <span className={styles.task_text} style={{fontSize:`${el.listFontSize}`+'px'}}>{el.content}</span>}
                    </div>
                    <button className={styles.arrow_down} onClick={() => dispatch(pushUp(index))}><ArrowDown size={30} /></button>
                    <button onClick={() => settingsItemHandler(index)}>{<Dots />}</button>
                    {el.menuState && <MenuBtn el={el.content} index={index}/>}
                </li>
      })}
    </ul>
  );
}

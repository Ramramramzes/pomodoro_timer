import styles from './menubtn.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../../../states/store";
import { fontBigger, fontLower, openedYet, showMenu } from "../../../states/taskSlice";
import { change, forchange, openPopup } from "../../../states/taskInputSlice";
import { change_active } from "../../../states/activchange";
import { Popup } from "./Popup";
import { Kontur, LupaM, LupaP, Pen, Trash } from '../../../img/images';
import { useEffect } from "react";

export function MenuBtn({el,index} : {el:string,index:number}) {
  const popup = useSelector((state:RootState) => state.inputChange.popupState)
  const taskList = useSelector((state:RootState) => state.taskList.value)
  const dispatch = useDispatch<AppDispatch>()

  const redHandler = (el:string,index:number) => {
    dispatch(change(el))
    dispatch(forchange(el))
    dispatch(change_active())
    dispatch(showMenu(index))
  }

  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      if(taskList[index].menuState){
        dispatch(openedYet({index:index,opened: 2}))
        if(taskList[index].opened == 2 && event.target != document.getElementById('kontur')){
          if(!target.classList.contains(`${styles.btn}`)){
            dispatch(showMenu(index))
          }
        }
      }
    }
    
    document.addEventListener('click',handleClick);
    
    return () => {
      document.removeEventListener('click',handleClick)
    };
  }, [taskList[index].opened]);

  return (
    <div className={styles.menu}>
      <div className={styles.btn_block}>
        <button className={styles.btn} onClick={() => {dispatch(fontBigger(index))}}><LupaP/><span className={styles.btn_text}>Увеличить</span></button>
        <button className={styles.btn} onClick={() => {dispatch(fontLower(index))}}><LupaM/><span className={styles.btn_text}>Уменьшить</span></button>
        <button className={styles.btn} onClick={() => redHandler(el,index)}><Pen/><span className={styles.btn_text}>Редактировать</span></button>
        <button className={styles.btn} onClick={() => {
          dispatch(openPopup())
        }}><Trash/><span className={styles.btn_text}>Удалить</span></button>
        {popup ? <Popup el={el} index={index}/> : ''}
      </div>
      <div className={styles.kontur}><Kontur /></div>
    </div>
  );
}

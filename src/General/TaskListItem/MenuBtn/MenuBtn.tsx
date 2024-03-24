import styles from './menubtn.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../../../states/store";
import { showMenu } from "../../../states/taskSlice";
import { change, forchange, openPopup } from "../../../states/taskInputSlice";
import { change_active } from "../../../states/activchange";
import { Popup } from "./Popup";
import { Kontur, LupaM, LupaP, Pen, Trash } from '../../../img/images';

export function MenuBtn({el,index} : {el:string,index:number}) {
  const popup = useSelector((state:RootState) => state.inputChange.popupState)
  const dispatch = useDispatch<AppDispatch>()

  const redHandler = (el:string,index:number) => {
    dispatch(change(el))
    dispatch(forchange(el))
    dispatch(change_active())
    dispatch(showMenu(index))
  }

  return (
    <div className={styles.menu}>
      <div className={styles.btn_block}>
        <button className={styles.btn}><LupaP/>Увеличить</button>
        <button className={styles.btn}><LupaM/>Уменьшить</button>
        <button className={styles.btn} onClick={() => redHandler(el,index)}><Pen/>Редактировать</button>
        <button className={styles.btn} onClick={() => {
          dispatch(openPopup())
        }}><Trash/>Удалить</button>
        {popup ? <Popup el={el} index={index}/> : ''}
      </div>
      <div className={styles.kontur}><Kontur /></div>
    </div>
  );
}

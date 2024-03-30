import styles from './menubtn.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../../../states/store";
import { fontBigger, fontLower, showMenu } from "../../../states/taskSlice";
import { change, forchange, openPopup } from "../../../states/taskInputSlice";
import { change_active } from "../../../states/activchange";
import { Popup } from "./Popup";
import { Kontur, LupaM, LupaP, Pen, Trash } from '../../../img/images';

export function MenuBtn({el,index} : {el:string,index:number}) {
  const popup = useSelector((state:RootState) => state.inputChange.popupState)
  const dispatch = useDispatch<AppDispatch>()
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)

  const redHandler = (el:string,index:number) => {
    dispatch(change(el))
    dispatch(forchange(el))
    dispatch(change_active())
    dispatch(showMenu(index))
  }

  return (
    <div onMouseLeave={()=> {
      dispatch(showMenu(index))
    }} className={darkmode ? styles.menu : styles.menu_dark}>
      <div className={styles.btn_block}>
        <button className={styles.btn} onClick={() => {dispatch(fontBigger(index))}}><LupaP/><span className={styles.btn_text}>Увеличить</span></button>
        <button className={styles.btn} onClick={() => {dispatch(fontLower(index))}}><LupaM/><span className={styles.btn_text}>Уменьшить</span></button>
        <button className={styles.btn} onClick={() => redHandler(el,index)}><Pen/><span className={styles.btn_text}>Редактировать</span></button>
        <button className={styles.btn} onClick={() => {
          dispatch(openPopup());
        }}><Trash/><span className={styles.btn_text}>Удалить</span></button>
        {popup ? <Popup el={el} index={index}/> : ''}
      </div>
      <div className={styles.kontur}><Kontur color={darkmode} /></div>
    </div>
  );
}

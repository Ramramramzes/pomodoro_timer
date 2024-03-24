import { useDispatch } from "react-redux";
import styles from "./popup.module.css"
import { AppDispatch } from "../../../../states/store";
import { openPopup } from "../../../../states/taskInputSlice";
import { delTask, showMenu } from "../../../../states/taskSlice";
import { useEffect } from "react";

export function  Popup({el,index}:{el: string,index: number}) {
  const dispatch = useDispatch<AppDispatch>()
  
  const delHandler = (el:string) => {
    dispatch(delTask(el))
  }

  useEffect(() => {
    const eventTarget1 = document.getElementById("close_id") as HTMLDivElement
    function handleClick(event: MouseEvent) {
      if(event.target == eventTarget1){
        dispatch(openPopup())
        dispatch(showMenu(index))
      }
    }
    document.addEventListener('click',handleClick);
    return () => {
      document.removeEventListener('click',handleClick)
    };
  }, []);




  return (
    <div id="close_id" className={styles.popup}>
      <div className={styles.popup_panel_content}>
        <p>Удалить задачу?</p>
        <button onClick={() => {
          delHandler(el)
          dispatch(openPopup())
        }}>Удалить</button>
        <button onClick={() => {
          dispatch(openPopup())
          dispatch(showMenu(index))
          }}>Отмена</button>
        <span onClick={() => {
          dispatch(openPopup())
          dispatch(showMenu(index))
          }} className={styles.popup_close}>x</span>
      </div>
    </div>
  );
}

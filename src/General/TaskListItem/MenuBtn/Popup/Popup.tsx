import { useDispatch, useSelector } from "react-redux";
import styles from "./popup.module.css"
import { AppDispatch, RootState } from "../../../../states/store";
import { openPopup } from "../../../../states/taskInputSlice";
import { delTask, showMenu } from "../../../../states/taskSlice";
import { useEffect } from "react";
import { Close } from "../../../../img/images";

export function  Popup({el,index}:{el: string,index: number}) {
  const taskList = useSelector((state:RootState) => state.taskList.value)
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
        <p className={styles.title}>Удалить задачу?</p>
        <button 
          className={styles.del_btn}
          onClick={() => {
            const mainRenderedList = document.getElementById('task_list')
            const neededLi = mainRenderedList?.getElementsByTagName('li')
            if(taskList.length >= index && neededLi){
              neededLi[index].classList.add('strike-animation','fade_out')
              setTimeout(() => {
                delHandler(el)
                neededLi[index].classList.remove('strike-animation','fade_out')
              }, 500);
            }
          dispatch(openPopup())
        }}>Удалить</button>
        <button 
          className={styles.back_btn}
          onClick={() => {
          dispatch(openPopup())
          dispatch(showMenu(index))
          }}>Отмена</button>
        <span onClick={() => {
          dispatch(openPopup())
          dispatch(showMenu(index))
          }} className={styles.popup_close}><Close /></span>
      </div>
    </div>
  );
}

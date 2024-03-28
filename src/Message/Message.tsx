import styles from './message.module.css';

import { useSelector } from "react-redux";
import { RootState } from "../states/store";
import { useEffect } from 'react';



export function Message() {
  const timer = useSelector((state: RootState) => state.timer)

  const msgFn = () => {
    const msgBlock = document.getElementById('msg_block');
      if (msgBlock) {
          msgBlock.classList.add('fade_in');
          setTimeout(() => {
            msgBlock.classList.add('fade_out');
          }, 3000);
        setTimeout(() => {
          msgBlock.classList.remove('fade_in');
          msgBlock.classList.remove('fade_out');
        }, 4000);
      }
    }

    useEffect(() => {
      if(timer.minutes === 0 && timer.seconds === 4){
        msgFn()
      }
      console.log(timer.minutes, timer.seconds);
      
    }, [timer.seconds]);


  return (
    <div>
      <div id='msg_block' className={`${styles.msg_block} ${timer.workActive ? styles.green : styles.red}`}>
        {timer.workActive ? '⏳ Рабочее время подходит к концу' : '⏳ Перерыв подходит к концу'}
      </div>
    </div>
  );
}

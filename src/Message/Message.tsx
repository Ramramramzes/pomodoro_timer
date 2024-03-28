import styles from './message.module.css';

import { useSelector } from "react-redux";
import { RootState } from "../states/store";



export function Message() {
  const timer = useSelector((state: RootState) => state.timer)
  
  return (
    <div>
<div id='msg_block' className={`${styles.msg_block} ${timer.workActive ? styles.green : styles.red}`}>
        {timer.workActive ? '⏳ Рабочее время подошло к концу' : '⏳ Перерыв закончился, за работу'}
      </div>
      <button onClick={() => {
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
      }}>anim</button>
    </div>
  );
}

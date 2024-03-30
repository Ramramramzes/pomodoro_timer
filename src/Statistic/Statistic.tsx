import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";


export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay(); //? день недели
  dispatch

  return (
    <div className={styles.statistic}>
      <div>Законченных заданий {statistic.curWeek[dayNum].readyTask}</div>
      <div>Время на паузе - {statistic.pauseResult.reduce((acc,cur) => acc + cur,0)} сек</div>
    </div>
  );
}

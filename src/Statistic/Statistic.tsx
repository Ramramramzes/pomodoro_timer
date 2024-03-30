import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect } from 'react';
import { setFocus } from '../states/statistic';


export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay(); //? день недели
  useEffect(() => {
    dispatch(setFocus({dayNum:dayNum, focus: statistic.curWeek[dayNum].readyTask != 0 ? (statistic.curWeek[dayNum].workTime.reduce((acc,cur) => acc + cur,0) * 60 / statistic.curWeek[dayNum].readyTask) : 0}))
  },[])
  dispatch

  return (
    <div className={styles.statistic}>
      <div>Законченных заданий {statistic.curWeek[dayNum].readyTask}</div>
      <div>Время на паузе - {statistic.curWeek[dayNum].pauseTime && statistic.curWeek[dayNum].pauseTime.reduce((acc,cur) => acc + cur,0)} сек</div>
      <div>Помидоров за сегодня {statistic.curWeek[dayNum].tomatoes}</div>
      <div>Время работы за сегодня {statistic.curWeek[dayNum].workTime.reduce((acc,cur) => acc + cur,0) * 60} сек </div>
      <div>Фокусирование {statistic.curWeek[dayNum].focus}</div>
    </div>
  );
}

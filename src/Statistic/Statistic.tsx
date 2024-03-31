import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect } from 'react';
import { setFocus } from '../states/statistic';


export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay(); //? день недели
  const day = statistic.curWeek[dayNum];
  const totalWorkTime = day.workTime.reduce((acc, cur) => acc + cur, 0);
  const totalBreakTime = day.breakTime.reduce((acc, cur) => acc + cur, 0);

  console.log('work ',day.workTime);
  console.log('per ',day.breakTime);
  

  useEffect(() => {
    dispatch(setFocus({dayNum:dayNum, focus: day.readyTask !== 0 ? Math.round(((totalWorkTime * 60 + totalBreakTime) / day.tomatoes) / (totalWorkTime * 60 + totalBreakTime) * 100) : 0 }))
    
  },[])

  return (
    <div className={styles.statistic}>
      <div>Законченных заданий {day.readyTask}</div>
      <div>Время на паузе - {day.pauseTime && day.pauseTime.reduce((acc,cur) => acc + cur,0)} сек</div>
      <div>Помидоров за сегодня {day.tomatoes}</div>
      <div>Время работы за сегодня {Math.round(day.workTime.reduce((acc,cur) => acc  + cur,0))} сек </div>
      <div>Фокусирование {day.focus}%</div>
      <div>Стопов {day.stops}</div>
    </div>
  );
}

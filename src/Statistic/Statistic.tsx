// import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect } from "react";

export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay(); //? Имя дня недели
  console.log('Сегодня ' + new Date().getDay());
  dispatch
  useEffect(() => {
    console.log(statistic.curWeek[dayNum]);
  },[])

  return (
    <>
      stat
    </>
  );
}

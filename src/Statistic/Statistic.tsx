import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect } from 'react';
import { setFocus } from '../states/statistic';
import { ChartEvent, ActiveElement, ChartOptions, } from 'chart.js';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

const options: ChartOptions<'bar'> = {
  onClick: function(event: ChartEvent, elements: ActiveElement[]) {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      console.log('Clicked element:', clickedElement);
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    y: {
      type: 'linear',
      position: 'right',
      ticks: {
        callback: function(value: string | number) {
          const tickValue = typeof value === 'string' ? parseFloat(value) : value;
          const hours = Math.floor(tickValue / 60);
          const minutes = tickValue % 60;
          return `${hours} ч ${minutes} мин`;
        }
      }
    }
  }
};

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay();
  const day = statistic.curWeek[dayNum];
  const totalWorkTime = day.workTime.reduce((acc, cur) => acc + cur, 0);
  const totalBreakTime = day.breakTime.reduce((acc, cur) => acc + cur, 0);
  
  const data = {
    labels,
    datasets: [
      {
        data: labels.map((el) => {
          if(el == day.name){
            return totalWorkTime/60
          }
          return 0.01
        }),
        backgroundColor: labels.map((label, index) => index === 0 ? '#C4C4C4' : '#EA8A79'),
        hoverBackgroundColor: '#EE735D',
      },
    ],
  };

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

      <Bar options={options} data={data} />
    </div>
  );
}

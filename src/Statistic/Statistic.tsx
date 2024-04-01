import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect } from 'react';
import { setFocus } from '../states/statistic';
import { ChartEvent, ActiveElement, ChartOptions, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Tooltip,} from 'chart.js';
import { setActiveDay } from '../states/statistic';
import { Tomato, TomatoSmile } from '../img/images';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

export function Statistic() {
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const dayNum = new Date().getDay();
  const day = statistic.curWeek[dayNum];
  const totalWorkTime = day.workTime.reduce((acc, cur) => acc + cur, 0);
  const totalBreakTime = day.breakTime.reduce((acc, cur) => acc + cur, 0);
  const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const daysList = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']

  const options: ChartOptions<'bar'> = {
    onClick: function(_event: ChartEvent, elements: ActiveElement[]) {
      if (elements.length > 0) {
        const clickedElement = elements[0];
        console.log('Clicked element:', clickedElement);
        dispatch(setActiveDay(clickedElement.index))
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
      x: {
        ticks: {
          color: (context) => {
            if (context.index === statistic.activeDay) {
              return '#DC3E22'; 
            } else {
              return '#999';
            }
          },
        }
      },
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

  const chartData = labels.map((el) => {
    if (el === day.name) {
      return totalWorkTime / 60;
    }
    return 0.01;
  });

  const backgroundColor = chartData.map((value, index) => {
    if(index === statistic.activeDay){
      return '#DC3E22'
    }
    if (value === 0.01) {
      return '#C4C4C4';
    }else{
      return '#EA8A79'
    }
    

  });

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor,
        hoverBackgroundColor: '#EE735D',
      },
    ],
  };

  const activDay = statistic.activeDay === 6 ? statistic.activeDay : statistic.activeDay === 7 ? 10 : statistic.activeDay + 1
  const workTimeForTextMsg = statistic.activeDay != 7 ? statistic.curWeek[activDay].workTime.reduce((acc, cur) => acc + cur, 0) : 10
  useEffect(() => {
    dispatch(setFocus({dayNum:dayNum, focus: day.readyTask !== 0 ? Math.round(((totalWorkTime * 60 + totalBreakTime) / day.tomatoes) / (totalWorkTime * 60 + totalBreakTime) * 100) : 0 }))
  },[])

  
  useEffect(() => {
    console.log(statistic.activeDay);
    console.log(workTimeForTextMsg);
    
  },[statistic.activeDay])


  return (
    <div className={styles.statistic}>
      <span>Ваша активность</span>
      <div>
        <div>
          <span>{daysList[statistic.activeDay != 7 ? statistic.activeDay : 10]}</span>
          {statistic.activeDay != 7 ? <span>Вы работали над задачами в течение {Math.round(workTimeForTextMsg/60/60) > 0 ? Math.round(workTimeForTextMsg/60/60) : 0}ч {Math.round(workTimeForTextMsg/60) > 0 ? Math.round(workTimeForTextMsg/60) : 0}м</span> : false}
        </div>
        <div>
          {statistic.activeDay === 7 || statistic.activeDay === 10 ? <TomatoSmile width={115}/> : <div> <Tomato width={81} /> x {statistic.curWeek[activDay].readyTask}</div>}
        </div>
      </div>




      <div>Законченных заданий {day.readyTask}</div>
      <div>Время на паузе - {day.pauseTime && day.pauseTime.reduce((acc,cur) => acc + cur,0)} сек</div>
      <div>Помидоров за сегодня {day.tomatoes}</div>
      <div>Время работы за сегодня {Math.round(day.workTime.reduce((acc,cur) => acc  + cur,0))} сек </div>
      <div>Фокусирование {day.focus}%</div>
      <div>Стопов {day.stops}</div>

      <Bar className={styles.bar} options={options} data={data} />
    </div>
  );
}

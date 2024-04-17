import styles from './statistic.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import { useEffect, useMemo,  } from 'react';
import { changeWeekState, dayCheck, newWeek, setFocus } from '../states/statistic';
import { ChartEvent, ActiveElement, ChartOptions, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Tooltip,} from 'chart.js';
import { setActiveDay } from '../states/statistic';
import { Clock, Focus, Stop, Tomato, TomatoSmile } from '../img/images';
import { Select } from './Select';




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

export function Statistic() {
  const formattedDate = `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getFullYear()}`;
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  let weekControl = statistic.curWeek;
  
  useMemo(() => {
    if(!statistic.weekChangeState){
      if(new Date().getDate() === 1){
        if(statistic.dayForCheck != formattedDate){
          dispatch(changeWeekState())
          dispatch(newWeek())
          dispatch(dayCheck(formattedDate))
        }
      }
      if(new Date().getDate() != 1){
        dispatch(changeWeekState())
      }
    }
  },[statistic.weekChangeState])

  switch (statistic.activeWeek) {
    case "cur":
      weekControl = statistic.curWeek;
      break;
    case "last":
      weekControl = statistic.lastWeek;
      break;
    case "past":
      weekControl = statistic.pastWeek;
      break;
    default:
      weekControl = statistic.curWeek;
      break;
  }
  
  const dayNum = statistic.activeDay === 6 ? statistic.activeDay : statistic.activeDay === 7 ? 10 : statistic.activeDay + 1
  const day = weekControl[dayNum];
  const totalWorkTime = day ? day.workTime.reduce((acc, cur) => acc + cur, 0) : 0;
  const totalBreakTime = day ? day.breakTime.reduce((acc, cur) => acc + cur, 0) : 0
  const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const daysList = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)

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
          padding: 20,
        }
      },
      y: {
        type: 'linear',
        position: 'right',
        ticks: {
          callback: function(value: string | number) {
            const tickValue = typeof value === 'string' ? parseFloat(value) : value;
            const hours = Math.floor(tickValue / 60);
            const minutes = Math.round(tickValue % 60);
            return `${hours} ч ${minutes} мин`;
          },
          color: !darkmode ? 'white' : 'gray'
        },
      }
    }
  };

  const chartData = labels.map((el) => {
    for (let i = 0; i < weekControl.length+1; i++) {
      
      if (el === weekControl[i].name) {
        const totalWorkTime = weekControl[i].workTime.reduce((acc, cur) => acc + cur, 0);
        return totalWorkTime === 0 ? .1 : totalWorkTime / 60;
      }
    }
  });

  const backgroundColor = chartData.map((value, index) => {
    if(index === statistic.activeDay){
      return '#DC3E22'
    }
    if (value === .1) {
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

  const activDay = statistic.activeDay === 6 ? 0 : statistic.activeDay + 1;
  const workTime = weekControl[activDay] ? weekControl[activDay].workTime : [];
  const workTimeForTextMsg = statistic.activeDay != 7 ? workTime.reduce((acc, cur) => acc + cur, 0) : 10
  useEffect(() => {
    dispatch(setActiveDay(new Date().getDate() === 0 ? 6 : new Date().getDate() - 1))
    dispatch(totalWorkTime != 0 ? setFocus({dayNum:dayNum, focus: day.readyTask !== 0 ? Math.round(((totalWorkTime * 60 + totalBreakTime) / day.tomatoes) / (totalWorkTime * 60 + totalBreakTime) * 100) : 0 }) : setFocus({dayNum:dayNum, focus:0}))
  },[])

  return (
    <div className={styles.statistic}>
      <div className={styles.title_select}>
        <span className={styles.title}>Ваша активность</span>
        <Select />
      </div>
      <div className={styles.top_block}>
        <div className={styles.left}>
          <div className={styles.day_worktime} style={!darkmode ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {} }>
            <span className={styles.day_data_title}>{daysList[statistic.activeDay != 7 ? statistic.activeDay : dayNum != 0 ? dayNum-1 : 6  ]}</span>
            <span className={styles.day_data}>{statistic.activeDay != 7 ? '' : 'Нет данных'}</span>
            {workTime.reduce((cur,ac) => cur + ac,0) == 0 ? 'Нет данных' : <span>Вы работали над задачами <br></br>в течение <span style={{color:'var(--back-red)',fontFamily:'SFUI_semi'}}>{Math.round(workTimeForTextMsg/60/60) > 0 ? Math.round(workTimeForTextMsg/60/60) : 0}ч {Math.round(workTimeForTextMsg/60) > 0 ? Math.round(workTimeForTextMsg/60) : 0}м</span></span>}
          </div>
          <div className={styles.tomato} style={!darkmode ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {} }>
            {(weekControl[activDay] ? weekControl[activDay].readyTask : 0) === 0 ? <TomatoSmile width={115} height={115}/> : <div className={styles.tomato_num}> <Tomato width={81} /><span style={{display:'flex',marginRight:'5px',marginLeft:'5px'}}>x</span>{weekControl[activDay].readyTask}</div>}
          </div>
        </div>
        <div className={styles.right} style={!darkmode ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {} }>
          <Bar className={styles.bar} options={options} data={data}/>
        </div>
      </div>
      <div className={styles.bottom_block}>
      <div className={styles.focus} style={darkmode ? ((weekControl[activDay] ? weekControl[activDay].focus : 0) === 0 ? {backgroundColor: '#F4F4F4'} : {backgroundColor: '#FFDDA9'} ) : (weekControl[activDay] && weekControl[activDay].focus === 0 ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {backgroundColor: '#FFDDA9', color: 'rgba(100, 100, 100, 1)'})}>
          <div className={styles.text_content}>
            <span className={styles.text_content_title}>Фокус</span>
            <span>{weekControl[activDay] && weekControl[activDay].focus}%</span>
          </div>
          {weekControl[activDay] && weekControl[activDay].focus === 0 ? <Focus color={'#C4C4C4'}/> : <Focus color={'#FFAE35'}/>}
        </div>
        <div className={styles.pause} style={darkmode ? (weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0) === 0 ? {backgroundColor: '#F4F4F4'} : {backgroundColor: '#DFDCFE'}) : (weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0) === 0 ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {backgroundColor: '#DFDCFE', color: 'rgba(100, 100, 100, 1)'})}>
          <div className={styles.text_content}>
            <span className={styles.text_content_title}>Время на паузе</span>
            <span>{Math.round(weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0)/60/60) > 0 ? Math.round(weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0)/60/60) : 0}ч {Math.round(weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0)/60) > 0 ? Math.round(weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0)/60) : 0}м</span>
          </div>
          {Math.ceil(weekControl[activDay] && weekControl[activDay].pauseTime.reduce((cur,ac) => cur + ac,0)/60/60) > 0  ? <Clock color={'#9C97D7'}/> : <Clock color={'#C4C4C4'}/>}
        </div>
        <div className={styles.stop} style={darkmode ? (weekControl[activDay] && weekControl[activDay].stops === 0 ? {backgroundColor: '#F4F4F4'} : {backgroundColor: '#C5F1FF'}) : (weekControl[activDay] && weekControl[activDay].stops === 0 ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {backgroundColor: '#C5F1FF', color: 'rgba(100, 100, 100, 1)'})}>
          <div className={styles.text_content}>
            <span className={styles.text_content_title}>Остановки</span>
            <span>{weekControl[activDay] && weekControl[activDay].stops}</span>
          </div>
          {weekControl[activDay] && weekControl[activDay].stops === 0 ? <Stop color={'#C4C4C4'}/> : <Stop color={'#7FC2D7'}/>}
        </div>
      </div>
    </div>
  );
}




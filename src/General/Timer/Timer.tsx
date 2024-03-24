import styles from './timer.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { AppDispatch, RootState } from '../../states/store';
import { addBigBreakeMinute, addBreakeMinute, addRound, addTomato, addWorkMinute, changeBigBreak, changeBreak, changeWork, pauseState, setPauseEnd, setPauseStart, setPausesResult, startTomato,  } from '../../states/timer';
import { removeFirst } from '../../states/taskSlice';
import { Plus } from '../../img/images';

function Timer() {
  const timer = useSelector((state: RootState) => state.timer)
  const taskList = useSelector((state: RootState) => state.taskList)
  const dispatch = useDispatch<AppDispatch>();

  //! Функция создания времени по данным пользователя
  const createNewTime = (userTime: number) => {
    return new Date(new Date().getTime() + userTime * 60000);
  };

  const skipFn = (minutes: number, seconds: number) => {
    if(minutes == 0 && seconds == 0 && timer.tomatoCount != 4){
      if(timer.workActive){
        if(timer.tomatoCount != 3){
          dispatch(changeBreak(true))
          dispatch(changeWork(false))
          dispatch(changeBigBreak(false))
        }
        if(timer.tomatoCount === 3){
          dispatch(changeBigBreak(true))
          dispatch(changeBreak(false))
          dispatch(changeWork(false))
        }
        dispatch(addTomato())
      }
      if(timer.breakActive){
        dispatch(changeWork(true))
        dispatch(changeBreak(false))
        dispatch(changeBigBreak(false))
      }
      dispatch(pauseState(false))
    }
    if(minutes == 0 && seconds == 0 && timer.tomatoCount === 4){
      dispatch(changeBigBreak(true))
      dispatch(changeWork(false))
      dispatch(changeBreak(false))
      dispatch(addRound())
      dispatch(startTomato())
    }
    dispatch(pauseState(false))
  }

  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: createNewTime(timer.userTime),
      onExpire: () => console.warn('onExpire called'),
      autoStart: false
                });
// !---- Переключение таймеров
    useEffect(() => {
      if(timer.tomatoCount == 0){
        dispatch(changeWork(true))
        dispatch(changeBreak(false))
        dispatch(changeBigBreak(false))
        dispatch(pauseState(false))
      }
    },[timer.tomatoCount])
    useEffect(() => {
      skipFn(minutes,seconds)
    },[minutes, seconds,])
    useEffect(() => {
      if(timer.workActive){
        restart(createNewTime(timer.userTime));
      }
      if(timer.bigBreakActive){
        restart(createNewTime(timer.bigBrakeTime));
      }
      if(timer.breakActive){
        restart(createNewTime(timer.breakTime));
      }
      pause();
    }, [pause, restart, timer.workActive, timer.breakActive, timer.bigBreakActive, timer.userTime, timer.breakTime, timer.bigBrakeTime]);
// !---- Расчет времени пауз в секундак
    useEffect(() => {
      dispatch(setPausesResult(Math.round((timer.forStatistic.pauseEnd - timer.forStatistic.pauseStart)/1000)))
    },[timer.forStatistic.pauseEnd])


  return (
    <div style={{textAlign: 'center'}}>
      <div className={styles.main_timer}>
        <span>{minutes < 10 ? '0': ''}{minutes}</span>:<span>{seconds < 10 ? '0': ''}{seconds}</span>
        {timer.workActive && !isRunning && <button  className={styles.plus_btn}
                                                    onClick={()=>{
                                                    dispatch(addWorkMinute())
                                                    pause()}}>
                                                    <Plus /></button>}
                                                    {/* рабочее время */}
        {timer.breakActive && !isRunning && <button className={styles.plus_btn}
                                                    onClick={()=>{
                                                    dispatch(addBreakeMinute())
                                                    pause()}}><Plus /></button>}
                                                    {/* перерыв */}
        {timer.bigBreakActive && !isRunning && <button  className={styles.plus_btn}
                                                        onClick={()=>{
                                                        dispatch(addBigBreakeMinute())
                                                        pause()}}><Plus /></button>}
                                                    {/* большой перерыв */}
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {taskList.value.length != 0 ? <p className={styles.list_status}>Задача {taskList.value.length != 0 ? taskList.value[0].taskIndex : ''} - {taskList.value.length != 0 ? taskList.value[0].content: ''}</p> : <p className={styles.list_status}>Задач нет</p>}
      {isRunning ? <button  className='green_btn'
                            onClick={() => {
                            dispatch(pauseState(true))
                            dispatch(setPauseStart(new Date().getTime()))
                            pause()
                            }}>Пауза</button>:''}
      {!isRunning ? <button className='green_btn' id='start_btn'  onClick={() => {
                                            resume()
                                            document.getElementById('start_btn')?.textContent === 'Продолжить' ? dispatch(setPauseEnd(new Date().getTime())) : false
                                            }}>{!timer.pauseState ? 'Старт' : 'Продолжить'}</button> : ''}

      {timer.workActive && !timer.pauseState ? <button onClick={() => {
        if(timer.workActive){
          restart(createNewTime(timer.userTime));
        }
        pause()
      }}>СТОП</button> : ''}
      {timer.workActive && timer.pauseState ? <button onClick={() => {
        if(timer.workActive){
          restart(createNewTime(timer.userTime));
          dispatch(removeFirst())
          dispatch(pauseState(false))
        }
        pause()
      }}>Сделано</button>: ''}
      {timer.breakActive || timer.bigBreakActive ? <button onClick={()=> skipFn(0,0)}>Пропустить</button> : ''}
    </div>
  );
}
export default Timer;
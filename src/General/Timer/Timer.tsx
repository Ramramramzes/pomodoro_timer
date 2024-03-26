import styles from './timer.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { AppDispatch, RootState } from '../../states/store';
import { addBigBreakeMinute, addBreakeMinute, addRound, addTomato, addWorkMinute, changeBigBreak, changeBreak, changeWork, pauseState, remWorkMinute, remBreakeMinute, remBigBreakeMinute, setIsRuning, setPauseEnd, setPauseStart, setPausesResult, startTomato,  } from '../../states/timer';
import { removeFirst } from '../../states/taskSlice';
import { Minus, Plus } from '../../img/images';

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
      seconds > 9 ? document.getElementById('forHidden')?.classList.add('dn') : document.getElementById('forHidden')?.classList.remove('dn')
      minutes > 9 ? document.getElementById('forHidden_m')?.classList.add('dn') : document.getElementById('forHidden_m')?.classList.remove('dn')
      seconds > 9 ? document.getElementById('seconds')?.classList.add('one_num_block_seconds_two') : document.getElementById('seconds')?.classList.remove('one_num_block_seconds_two')
      minutes > 9 ? document.getElementById('minutes')?.classList.add('one_num_block_minutes_two') : document.getElementById('minutes')?.classList.remove('one_num_block_minutes_two')
      
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

// !---- isRuning в общий стор
    useEffect(() => {
      dispatch(setIsRuning(isRunning))
    },[dispatch, isRunning])

  return (
    <div className={styles.main}>
      <div className={styles.main_timer}>
        <div className={
                          isRunning && timer.workActive ? styles.num_red :
                          (isRunning && (timer.breakActive || timer.bigBreakActive)) ? styles.num_green :
                          styles.num_def
                        }
            ><div id='forHidden_m' className={styles.one_num_block}>{minutes < 10 ? '0' : ''}</div><div id='minutes' className={styles.one_num_block}>{minutes}</div>:<div id='forHidden' className={styles.one_num_block}>{seconds < 10 ? '0' : ''}</div><div id='seconds' className={styles.one_num_block}>{seconds}</div></div>
      </div>
      <div className={styles.btns_and_tasks}>
        <div className={styles.plus_block}>
          {timer.workActive && <button  className={styles.plus_min}
                                                      disabled={isRunning  || minutes <= 1}
                                                      onClick={()=>{
                                                      dispatch(remWorkMinute())
                                                      pause()}}>
                                                      <Minus color={isRunning} /></button>}
                                                      {/* рабочее время */}
          {timer.breakActive && <button className={styles.plus_min}
                                                      disabled={isRunning  || minutes <= 1}
                                                      onClick={()=>{
                                                      dispatch(remBreakeMinute())
                                                      pause()}}><Minus color={isRunning} /></button>}
                                                      {/* перерыв */}
          {timer.bigBreakActive && <button  className={styles.plus_min}
                                                      disabled={isRunning  || minutes <= 1}
                                                          onClick={()=>{
                                                          dispatch(remBigBreakeMinute())
                                                          pause()}}><Minus color={isRunning} /></button>}
                                                      {/* большой перерыв */}
        </div>
        {taskList.value.length != 0 ? <p title={taskList.value[0].content} className={taskList.value[0].content.length > 30 ? styles.list_status_long : styles.list_status_short}>Задача {taskList.value.length != 0 ? taskList.value[0].taskIndex : ''} : {taskList.value.length != 0 ? taskList.value[0].content: ''}</p> : <p className={styles.no_task}>Задач нет</p>}
        <div className={styles.plus_block}>
          {timer.workActive  && <button  className={styles.plus_btn}
                                                      disabled={isRunning}
                                                      onClick={()=>{
                                                      dispatch(addWorkMinute())
                                                      pause()}}>
                                                      <Plus color={isRunning} /></button>}
                                                      {/* рабочее время */}
          {timer.breakActive && <button className={styles.plus_btn}
                                                      disabled={isRunning}
                                                      onClick={()=>{
                                                      dispatch(addBreakeMinute())
                                                      pause()}}><Plus color={isRunning} /></button>}
                                                      {/* перерыв */}
          {timer.bigBreakActive && <button  className={styles.plus_btn}
                                                          disabled={isRunning}
                                                          onClick={()=>{
                                                          dispatch(addBigBreakeMinute())
                                                          pause()}}><Plus color={isRunning} /></button>}
                                                      {/* большой перерыв */}
        </div>
      </div>
      <div className={styles.btn_block}>
      {isRunning ? <button  className='green_btn_pause btn-animation'
                            onClick={() => {
                            dispatch(pauseState(true))
                            dispatch(setPauseStart(new Date().getTime()))
                            pause()
                            }}>Пауза</button>:''}
      {!isRunning ? <button className='green_btn btn-animation' id='start_btn'  onClick={() => {
                                            resume()
                                            dispatch(pauseState(false))
                                            document.getElementById('start_btn')?.textContent === 'Продолжить' ? dispatch(setPauseEnd(new Date().getTime())) : false
                                            }}>{!timer.pauseState ? 'Старт' : 'Продолжить'}</button> : ''}

      {timer.workActive && !timer.pauseState ? <button  className={!isRunning ? styles.stop_btn_dis + ' btn-animation' : styles.stop_btn + ' btn-animation'}
                                                        onClick={() => {
                                                        if(timer.workActive){
                                                          restart(createNewTime(timer.userTime));
                                                        }
                                                        pause()
                                                      }}>Стоп</button> : ''}
      {timer.workActive && timer.pauseState ? <button className={styles.skip_btn + ' btn-animation'}
                                                      onClick={() => {
                                                      if(timer.workActive){
                                                        //? непонятно сбрасывать таймер или нет
                                                        // restart(createNewTime(timer.userTime));
                                                        dispatch(removeFirst())
                                                        dispatch(pauseState(false))
                                                      }
                                                      pause()
                                                    }}>Сделано</button>: ''}
      {timer.breakActive || timer.bigBreakActive ? <button className={styles.skip_btn + ' btn-animation'} onClick={()=> skipFn(0,0)}>Пропустить</button> : ''}
      </div>
    </div>
  );
}
export default Timer;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { AppDispatch, RootState } from '../../states/store';
import { addBigBreakeMinute, addBreakeMinute, addRound, addTomato, addWorkMinute, changeBigBreak, changeBreak, changeWork, pauseState, startTomato,  } from '../../states/timer';

function Timer() {
  const timer = useSelector((state: RootState) => state.timer)
  const dispatch = useDispatch<AppDispatch>();

  //! Функция создания времени по данным пользователя
  const createNewTime = (userTime: number) => {
    return new Date(new Date().getTime() + userTime * 60000);
  };

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

    useEffect(() => {
      if(timer.tomatoCount == 0){
        dispatch(changeWork(true))
        dispatch(changeBreak(false))
        dispatch(changeBigBreak(false))
        dispatch(pauseState(false))
      }
    },[timer.tomatoCount])
    useEffect(() => {
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

  return (
    <div style={{textAlign: 'center'}}>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes < 10 ? '0': ''}{minutes}</span>:<span>{seconds < 10 ? '0': ''}{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      {isRunning ? <button onClick={() => {
        pause()
        dispatch(pauseState(true))
        }}>Пауза</button>:''}
      {!isRunning ? <button onClick={resume}>{!timer.pauseState ? 'Старт' : 'Продолжить'}</button> : ''}
      {timer.workActive ? <button onClick={() => {
        if(timer.workActive){
          restart(createNewTime(timer.userTime));
        }
        pause()
      }}>СТОП</button>: ''}

      {timer.workActive && !isRunning && <button onClick={()=>{
                                    dispatch(addWorkMinute())
                                    pause()}}>+ рабочее время </button>}
      {timer.breakActive && !isRunning && <button onClick={()=>{
                                    dispatch(addBreakeMinute())
                                    pause()}}>+ перерыв</button>}
      {timer.bigBreakActive && !isRunning && <button  onClick={()=>{
                                        dispatch(addBigBreakeMinute())
                                        pause()}}>+ большой перерыв</button>}
    </div>
  );
}
export default Timer;
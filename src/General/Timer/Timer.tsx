import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { AppDispatch, RootState } from '../../states/store';
import { addMinute } from '../../states/timer';

function Timer() {
  const timer = useSelector((state: RootState) => state.timer)
  const userTime = timer.value.userTime
  const dispatch = useDispatch<AppDispatch>();

  //! Функция создания времени по данным пользователя
  const createNewTime = (userTime: number) => {
    return new Date(new Date().getTime() + userTime * 60000);
  };

  const addTime = () => {
    dispatch(addMinute())
  }

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: createNewTime(userTime),
      onExpire: () => console.warn('onExpire called'),
      autoStart: false
                });

    useEffect(() => {
      restart(createNewTime(userTime));
      pause();
    }, [pause, restart, userTime]);

  return (
    <div style={{textAlign: 'center'}}>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes < 10 ? '0': ''}{minutes}</span>:<span>{seconds < 10 ? '0': ''}{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        restart(createNewTime(userTime))
        pause()
      }}>Restart</button>

      <button onClick={
        ()=>{
          addTime()
          pause()
        }
      }>+</button>
    </div>
  );
}
export default Timer;
import { useDispatch, useSelector } from 'react-redux';
import { Logo, Moon, Statistic, Sun } from '../img/images';
import styles from './header.module.css';
import { AppDispatch, RootState } from '../states/store';
import { setStatisticHover } from '../states/hoverStates';
import { darkmodeState } from '../states/settings';
import { Link } from 'react-router-dom';
import { setPausesResult, setTomatosForStat } from '../states/statistic';
import { bigBrakePlaceDown, bigBrakePlaceUp } from '../states/timer';



export function Header({page}:{page:boolean}) {
  const dispatch = useDispatch<AppDispatch>();
  const hoverStates = useSelector((state: RootState) => state.hoverState.hover)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)
  const statistic = useSelector((state: RootState) => state.statistic)
  const timer = useSelector((state: RootState) => state.timer)
  const dayNum = new Date().getDay()
  const screenWidth = window.innerWidth;
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo width={screenWidth > 500 ? 205 : 100} />
      </Link>
      <div className={styles.btns}>
        {darkmode ? <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Moon size={screenWidth > 500 ? 25 : 20} color={true}/></button> : <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Sun size={screenWidth > 500 ? 30 : 25} color={true}/></button>}
        <div className={styles.rounds_control}>
          <button className={styles.btn_minus} onClick={() => {dispatch(bigBrakePlaceDown())}}>-</button>
          <span title='Колл-во помидоров до большого перерыва' className={styles.rounds}>{timer.bigBrakePlace && timer.bigBrakePlace}</span>
          <button className={styles.btn_plus} onClick={() => {dispatch(bigBrakePlaceUp())}}>+</button>
        </div>
        {!page ? <Link to="/statistic">
                    <button
                      onMouseEnter={() => dispatch(setStatisticHover())}
                      onMouseLeave={() => dispatch(setStatisticHover())}
                      onClick={() => {
                        dispatch(setStatisticHover())
                        if(document.getElementById('start_btn')?.textContent === 'Продолжить'){
                          dispatch(setPausesResult((Math.round((new Date().getTime() - statistic.pauseStart)/1000))))
                        }
                        dispatch(setTomatosForStat({dayNum:dayNum,result: ((timer.rounds * 4) + timer.tomatoCount)}))
                      }}
                      className={styles.stat_btn}><Statistic size={screenWidth > 500 ? 24 : 20} color={hoverStates.statistic}/> Статистика</button>
                  </Link>
                  :
                  <button
                  onMouseEnter={() => dispatch(setStatisticHover())}
                  onMouseLeave={() => dispatch(setStatisticHover())}
                  className={styles.stat_btn}><Statistic size={screenWidth > 500 ? 24 : 20} color={hoverStates.statistic}/> Статистика</button>
        }  
      </div>
    </div>
  );
}

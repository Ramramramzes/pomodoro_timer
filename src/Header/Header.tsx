import { useDispatch, useSelector } from 'react-redux';
import { Logo, Moon, Statistic, Sun } from '../img/images';
import styles from './header.module.css';
import { AppDispatch, RootState } from '../states/store';
import { setStatisticHover } from '../states/hoverStates';
import { darkmodeState } from '../states/settings';
import { Link } from 'react-router-dom';
import { setPausesResult } from '../states/statistic';



export function Header({page}:{page:boolean}) {
  const dispatch = useDispatch<AppDispatch>();
  const hoverStates = useSelector((state: RootState) => state.hoverState.hover)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)
  const statistic = useSelector((state: RootState) => state.statistic)
  const screenWidth = window.innerWidth;
  return (
    <div className={styles.header}>
      <Logo width={screenWidth > 500 ? 205 : 100} />
      <div className={styles.btns}>
        {darkmode ? <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Moon size={screenWidth > 500 ? 25 : 20} color={true}/></button> : <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Sun size={screenWidth > 500 ? 30 : 25} color={true}/></button>}
        {!page ? <Link to="/statistic">
                    <button
                      onMouseEnter={() => dispatch(setStatisticHover())}
                      onMouseLeave={() => dispatch(setStatisticHover())}
                      onClick={() => {
                        if(document.getElementById('start_btn')?.textContent === 'Продолжить'){
                          dispatch(setPausesResult((Math.round((new Date().getTime() - statistic.pauseStart)/1000))))
                        }
                      }}
                      className={styles.stat_btn}><Statistic size={screenWidth > 500 ? 24 : 20} color={hoverStates.statistic}/> Статистика</button>
                  </Link>
                  :
                  <Link to="/">
                    <button
                    onMouseEnter={() => dispatch(setStatisticHover())}
                    onMouseLeave={() => dispatch(setStatisticHover())}
                    className={styles.stat_btn}><Statistic size={screenWidth > 500 ? 24 : 20} color={!hoverStates.statistic}/> Статистика</button>
                  </Link>
        }  
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { Logo, Moon, Statistic, Sun } from '../img/images';
import styles from './header.module.css';
import { AppDispatch, RootState } from '../states/store';
import { setStatisticHover } from '../states/hoverStates';
import { darkmodeState } from '../states/settings';


export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const hoverStates = useSelector((state: RootState) => state.hoverState.hover)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)

  return (
    <div className={styles.header}>
      <Logo width={205} />
      <div className={styles.btns}>
        {darkmode ? <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Moon size={25} color={true}/></button> : <button className={styles.darkmode_btn} onClick={() => dispatch(darkmodeState())}><Sun size={30} color={true}/></button>}
        <button
        onMouseEnter={() => dispatch(setStatisticHover())}
        onMouseLeave={() => dispatch(setStatisticHover())}
        className={styles.stat_btn}><Statistic size={24} color={hoverStates.statistic}/> Статистика</button>
      </div>
    </div>
  );
}

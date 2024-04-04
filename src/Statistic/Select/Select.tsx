import styles from './select.module.css';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { selectState } from '../../states/customSelect';
import { changeWeek } from '../../states/statistic';

export function Select() {
  const select = useSelector((state: RootState) => state.select)
  const statistic = useSelector((state: RootState) => state.statistic)
  const dispatch = useDispatch<AppDispatch>();
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)
  
  const openSelect = () => {
    dispatch(selectState())
  };

  const data = ['Эта неделя','Прошедшая неделя','2 недели назад']
  const customStyleClosed = {
    paddingLeft: '20px',
    backgroundImage: `url('/src/img/arr_down.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '95%',
    backgroundPositionY: '50%'
  };
  const customStyleOpen = {
    backgroundImage: `url('/src/img/arr_up.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '95%',
    backgroundPositionY: '50%'
  };
  
  return (
    <div className={styles.container} style={!darkmode ? {backgroundColor: 'rgba(100, 100, 100, .5)'} : {backgroundColor: '#f4f4f4'}}>
      <div onClick={!select.isOpen ? openSelect : ()=>''} className={styles.list} style={select.isOpen ? {bottom: '-210%'} : {top: 'calc(50%)'}}>
      {select.isOpen ? data.map((el,index) => <span onClick={() => {
                                                    dispatch(selectState())
                                                    dispatch(changeWeek(el === data[0] ? 'cur' : el === data[1] ? 'last' : 'past' ));
                                                  }} key={index} className={!darkmode ? styles.item : styles.item_dark} style={index === 0 ? customStyleOpen : {}}>{el}</span>) : statistic.activeWeek === 'cur' ?  <span style={customStyleClosed}>{data[0]}</span> : statistic.activeWeek === 'last' ? <span style={customStyleClosed}>{data[1]}</span> : <span style={customStyleClosed}>{data[2]}</span>}
      </div>
    </div>
  );
}



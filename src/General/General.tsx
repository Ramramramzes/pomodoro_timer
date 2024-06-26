import { useSelector } from 'react-redux';
import styles from './general.module.css'
import { Guide } from './Guide';
import { TaskInput } from './TaskInput';
import { TaskListItem } from './TaskListItem';
import Timer from './Timer/Timer';
import { RootState } from '../states/store';

export function General() {
  const list = useSelector((state: RootState) => state.taskList)
  const timer = useSelector((state: RootState) => state.timer)
  const tomatoCount = useSelector((state: RootState) => state.timer.tomatoCount)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)

  return (
    <div className={styles.general}>
      <div className={styles.leftside}>
        <Guide />
        <TaskInput />
        <TaskListItem />
      </div>
      <div className={styles.rightside_main}>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.1)'}} className={timer.isRuning && timer.workActive ? styles.rightside_red :
                            (timer.isRuning && (timer.breakActive || timer.bigBreakActive)) ? styles.rightside_green :
                            styles.rightside_def}>
          <div className={timer.isRuning && timer.workActive ? styles.title_red :
                            (timer.isRuning && (timer.breakActive || timer.bigBreakActive)) ? styles.title_green :
                            styles.title_def + (darkmode ? ' bcg_title' : ' bcg_title_dark')}>
                            
            <span title={list.value.length != 0 ? list.value[0].content : 'Задач нет'} className={styles.title}>{list.value.length != 0 ? list.value[0].content : 'Задач нет'}</span>
            <span className={styles.count}>{timer.workActive ? 'Помидор' : timer.breakActive ? 'Перерыв' : ''} {tomatoCount != timer.bigBrakePlace && !timer.breakActive? tomatoCount + 1 : ''}{tomatoCount != timer.bigBrakePlace && !timer.workActive ? tomatoCount : ''}{timer.bigBreakActive ? 'Большой перерыв' : ''}</span>
          </div>
          <Timer />
        </div>
      </div>
    </div>
  );
}

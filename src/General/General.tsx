import { useSelector } from 'react-redux';
import styles from './general.module.css'
import { Guide } from './Guide';
import { TaskInput } from './TaskInput';
import { TaskListItem } from './TaskListItem';
import Timer from './Timer/Timer';
import { RootState } from '../states/store';

export function General() {
  const list = useSelector((state: RootState) => state.taskList)
  const tomatoCount = useSelector((state: RootState) => state.timer.tomatoCount)

  return (
    <div className={styles.general}>
      <div className={styles.leftside}>
        <Guide />
        <TaskInput />
        <TaskListItem />
      </div>
      <div className={styles.rightside}>
        <div className={styles.title_block}>
          <span className={styles.title}>{list.value.length != 0 ? list.value[0].content : 'Задач нет'}</span>
          <span className={styles.count}>Помидор {tomatoCount != 4 ? tomatoCount + 1 : '4'}</span>
        </div>
        <Timer />
      </div>
    </div>
  );
}

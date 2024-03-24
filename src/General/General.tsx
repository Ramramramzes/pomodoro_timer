// import styles from './general.module.css'
import { Guide } from './Guide';
import { TaskInput } from './TaskInput';
import { TaskListItem } from './TaskListItem';
import Timer from './Timer/Timer';

export function General() {

  return (
    <>
      <div>
        <Guide />
        <TaskInput />
        <TaskListItem />
      </div>
      
      <Timer />
    </>
  );
}

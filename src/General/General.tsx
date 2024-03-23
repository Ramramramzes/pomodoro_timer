import { TaskInput } from './TaskInput';
import { TaskListItem } from './TaskListItem';
import Timer from './Timer/Timer';

export function General() {

  return (
    <>
      <TaskInput />
      <TaskListItem />
      <Timer />
    </>
  );
}

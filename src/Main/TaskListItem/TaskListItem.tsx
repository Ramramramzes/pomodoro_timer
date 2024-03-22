import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { delTask } from "../../states/taskSlice";

export function TaskListItem() {
  const taskList = useSelector((state:RootState) => state.taskList.value)
  const dispatch = useDispatch<AppDispatch>()

  const delHandler = (el:string) => {
    dispatch(delTask(el))
  }
  return (
    <ul>
      {taskList && taskList.map((el,index) => {
        return <li key={index}>
          {el}
          <button onClick={() => delHandler(el)}>del</button>
          </li>
      })}
    </ul>
  );
}

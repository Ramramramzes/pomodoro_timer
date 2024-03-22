import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import { MenuBtn } from "./MenuBtn";

export function TaskListItem() {
  const taskList = useSelector((state:RootState) => state.taskList.value)
  // const dispatch = useDispatch<AppDispatch>();

  
  return (
    <ul>
      {taskList && taskList.map((el,index) => {
        return  <li key={index}>
                  {el.content}
                  <button>...</button>
                  <MenuBtn el={el.content} />
                </li>
      })}
    </ul>
  );
}

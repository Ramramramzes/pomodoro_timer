import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import { MenuBtn } from "./MenuBtn";

export function TaskListItem() {
  const taskList = useSelector((state:RootState) => state.taskList.value)
  // const taskInput = useSelector((state:RootState) => state.inputChange.value)

  
  return (
    <ul>
      {taskList && taskList.map((el,index) => {
        return  <li key={index}>
                  {el}
                  <button>...</button>
                  <MenuBtn el={el} />
                </li>
      })}
    </ul>
  );
}

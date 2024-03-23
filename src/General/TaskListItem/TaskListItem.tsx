import { useSelector,useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../states/store";
import { MenuBtn } from "./MenuBtn";
import { showMenu } from "../../states/taskSlice";
import { change } from "../../states/taskInputSlice";
import { change_active } from "../../states/activchange";

export function TaskListItem() {
  const taskList = useSelector((state:RootState) => state.taskList.value)
  const activeChange = useSelector((state: RootState) => state.activeChange)
  const dispatch = useDispatch<AppDispatch>();

  const settingsItemHandler = (index:number) => {
    dispatch(showMenu(index))
    dispatch(change(''))
    if(activeChange.value){
      dispatch(change_active());
    }
  }
  
  return (
    <ul>
      {taskList && taskList.map((el,index) => {
        return  <li key={index}>
                  {el.content}
                  <button onClick={() => settingsItemHandler(index)}>...</button>
                  {el.menuState && <MenuBtn el={el.content} index={index}/>}
                </li>
      })}
    </ul>
  );
}

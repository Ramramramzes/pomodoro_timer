import { useDispatch } from "react-redux";
import { AppDispatch} from "../../../states/store";
import { delTask, showMenu } from "../../../states/taskSlice";
import { change, forchange } from "../../../states/taskInputSlice";
import { change_active } from "../../../states/activchange";

export function MenuBtn({el,index} : {el:string,index:number}) {

  const dispatch = useDispatch<AppDispatch>()

  const delHandler = (el:string) => {
    dispatch(delTask(el))
  }

  const redHandler = (el:string,index:number) => {
    dispatch(change(el))
    dispatch(forchange(el))
    dispatch(change_active())
    dispatch(showMenu(index))
  }

  return (
    <>
      <button onClick={() => delHandler(el)}>del</button>
      <button onClick={() => redHandler(el,index)}>red</button>
    </>
  );
}

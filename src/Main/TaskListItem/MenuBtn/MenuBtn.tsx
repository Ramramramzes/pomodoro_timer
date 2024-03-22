import { useDispatch } from "react-redux";
import { AppDispatch} from "../../../states/store";
import { delTask } from "../../../states/taskSlice";
import { change, forchange } from "../../../states/taskInputSlice";

export function MenuBtn({el} : {el:string}) {
  const dispatch = useDispatch<AppDispatch>()

  const delHandler = (el:string) => {
    dispatch(delTask(el))
  }

  const redHandler = (el:string) => {
    dispatch(change(el))
    dispatch(forchange(el))
  }

  return (
    <>
      <button onClick={() => delHandler(el)}>del</button>
      <button onClick={() => redHandler(el)}>red</button>
    </>
  );
}

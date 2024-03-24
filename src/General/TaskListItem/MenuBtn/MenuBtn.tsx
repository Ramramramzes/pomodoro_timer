import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../../../states/store";
import { showMenu } from "../../../states/taskSlice";
import { change, forchange, openPopup } from "../../../states/taskInputSlice";
import { change_active } from "../../../states/activchange";
import { Popup } from "./Popup";

export function MenuBtn({el,index} : {el:string,index:number}) {
  const popup = useSelector((state:RootState) => state.inputChange.popupState)

  const dispatch = useDispatch<AppDispatch>()

  const redHandler = (el:string,index:number) => {
    dispatch(change(el))
    dispatch(forchange(el))
    dispatch(change_active())
    dispatch(showMenu(index))
  }

  return (
    <>
      <button onClick={() => redHandler(el,index)}>red</button>
      <button onClick={() => {
        dispatch(openPopup())
      }}>Попап</button>
      {popup ? <Popup el={el} index={index}/> : ''}
    </>
  );
}

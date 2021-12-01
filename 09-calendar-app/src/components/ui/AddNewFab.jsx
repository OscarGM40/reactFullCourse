import { useDispatch } from "react-redux"
import { eventClearActiveEvent } from "../../actions/eventActions"
import { uiOpenModal } from "../../actions/uiActions"


export const AddNewFab = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(eventClearActiveEvent());
    dispatch(uiOpenModal())
  }

  return (
    <button className="btn btn-primary fab"
      onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  )
}

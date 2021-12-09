import { useDispatch } from "react-redux"
import { eventStartDeleting } from "../../actions/eventActions"




export const DeleteEventFab = () => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(eventStartDeleting())
  }

  return (
    <button className="btn btn-danger fab-danger"
    onClick={handleDelete}>
      <i className="fas fa-trash mr-2"></i>
      <span>Borrar evento</span>
    </button>
  )
}

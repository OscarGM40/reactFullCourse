import { useDispatch } from "react-redux"
import { eventDelete } from "../../actions/eventActions"




export const DeleteEventFab = () => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(eventDelete())
  }

  return (
    <button className="btn btn-danger fab-danger"
    onClick={handleDelete}>
      <i className="fas fa-trash mr-2"></i>
      <span>Borrar evento</span>
    </button>
  )
}

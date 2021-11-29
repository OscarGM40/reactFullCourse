// fijate que Modal es un HOC super-configurable
import Modal from 'react-modal';
import moment from 'moment';
import Swal from 'sweetalert2';

// import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/uiActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Estas declaraciones(y el css de arriba ) fijate que están fuera del componente,esto es para que se calculen sólo una vez,a diferencia de si las pusiera dentro del functional component

// en React o Angular simplemente apuntar al selector del div que esta en el index.html con la app del framework
Modal.setAppElement('#root');

// 3:45:50s no quiero esto,quiero horas exactas
const now = moment().minutes(0).seconds(0).add(1, 'hours')
// con esto será siempre la siguiente hora
const nowPlus1 = now.clone().add(1, 'hours')
// no puedo operar sobre now porque va por referencia,por eso lo clono ayudandome de la libreria moment y su función clone

export const CalendarModal = () => {
  
  const { modalOpen } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [ titleValid,setTitleValid] = useState(true);
  const [ datesValid,setDatesValid] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Evento',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  }

  const closeModal = () => {
    dispatch(uiCloseModal());
  }

  const handleStartDateChange = (date) => {
    setDateStart(date._d);
    const endTime = moment(date._d).add(1, 'hours');
    setDateEnd(endTime.toDate());

    setFormValues({
      ...formValues,
      start: date._d,
    });
  }

  const handleEndDateChange = (date) => {
    setDateEnd(date._d);
    setFormValues({
      ...formValues,
      end: date._d,
    });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    // Puedo parsear una Date a un objeto moment con moment(date) y un objeto moment a Date con moment.toDate()
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      setDatesValid(false);
      return Swal.fire({
        title: 'Error',
        text: 'La fecha final debe ser mayor que la inicial',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  
    if(title.trim().length < 2){
      return setTitleValid(false);
    }

    setTitleValid(true);
    setDatesValid(true);
    closeModal();

  }

    const yesterday = moment(dateStart).subtract(1, 'day')
    const valid = (current) => {
      return current.isAfter(yesterday);
    };

    return (
      <div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-fondo"
        >
          <h1> Nuevo evento </h1>
          <hr />
          <form className="container" onSubmit={handleSubmitForm}>

            <div className="form-group">
              <label>Fecha y hora inicio</label>

              <DatePicker
                inputProps={{
                  style: {
                    width: "100%", height: "114%",cursor:"pointer", background: 'black',
                    position: "relative", top: "-2px", left: "-3px", color: 'white'
                  }
                }}
                value={dateStart}
                showTimeSelect
                onChange={handleStartDateChange}
                dateFormat="DD-MM-YYYY"
                timeFormat="hh:mm A"
                className={datesValid 
                  ?'form-control m-0 py-0 pl-0 pr-4.5 is-valid' 
                  :'form-control m-0 py-0 pl-0 pr-4.5 is-invalid'}
                  closeOnSelect={true}
                  closeOnClickOutside={true}
                  
                  />

            </div>

            <div className="form-group">
              <label>Fecha y hora fin</label>
              <DatePicker
                inputProps={{
                  style: { width: "100%",height: "114%",
                  cursor:"pointer",background: 'black', 
                  position:"relative",top:"-2px",left:"-3px",color: 'white' }
                }}
                value={dateEnd}
                onChange={handleEndDateChange}
                dateFormat="DD-MM-YYYY"
                timeFormat="hh:mm A"
                closeOnSelect={true}
                className={datesValid 
                  ?'form-control m-0 py-0 pl-0 pr-4.5 is-valid' 
                  :'form-control m-0 py-0 pl-0 pr-4.5 is-invalid'}
                closeOnClickOutside={true}
                isValidDate={valid}
              />
            </div>

            <hr />
            <div className="form-group">
              <label>Titulo y notas</label>
              <input
                type="text"
                className={`form-control ${!titleValid && 'is-invalid'}`}
                placeholder="Título del evento"
                name="title"
                value={title}
                onChange={handleInputChange}
                autoComplete="off"
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Notas"
                rows="5"
                name="notes"
                value={notes}
                onChange={handleInputChange}
                autoComplete="off"
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
              type="submit"
              className="btn btn-outline-primary btn-block"
            >
              <i className="far fa-save"></i>
              <span> Guardar</span>
            </button>

          </form>
        </Modal>
      </div>
    )
  }

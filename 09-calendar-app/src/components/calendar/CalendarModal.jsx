
// fijate que Modal es un HOC super-configurable
import Modal from 'react-modal';
import moment from 'moment';

// import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import { useState } from 'react';

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

// en React o Angular apuntar al selector más alto
Modal.setAppElement('#root');

// 3:45:50s no quiero esto,quiero horas exactas
const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nowPlus1 = now.clone().add(1, 'hours')

// con esto será siempre la siguiente hora

export const CalendarModal = () => {

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())

  const [formValues, setFormValues] = useState({
    title:'Evento',
    notes:'', 
    start:now.toDate(),
    end:nowPlus1.toDate(),
  });

  const { title, notes, } = formValues;

  const handleInputChange = ( {target} ) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  }
  
  const closeModal = () => {

  }

  const handleStartDateChange = (date) => {
    setDateStart(date._d);
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

    console.log(formValues);
  }

  
  const yesterday = moment(dateStart).subtract(1, 'day')
  const valid = (current) => {
    return current.isAfter(yesterday);
  };

  return (
    <div>
      <Modal
        isOpen={true}
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

            {/* Forma prehistórica */}
            {/*             <DateTimePicker
              onChange={ handleStartDateChange }
              value={ dateStart }
              className="form-control"
            /> */}
            <DatePicker
              inputProps={{
                style: { width: "100%", background: 'black', color: 'white' }
              }}
              value={dateStart}
              onChange={handleStartDateChange}
              dateFormat="DD-MM-YYYY"
              timeFormat="hh:mm A"
              closeOnSelect={true}
              closeOnClickOutside={true}

            />

          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            {/*             <DateTimePicker
              onChange={ handleEndDateChange }
              value={ dateEnd }
              minDate={ dateStart }
              className="form-control"
            /> */}
            <DatePicker
              inputProps={{
                style: { width: "100%", background: 'black', color: 'white' }
              }}
              value={dateEnd}
              onChange={handleEndDateChange}
              dateFormat="DD-MM-YYYY"
              timeFormat="hh:mm A"
              closeOnSelect={true}
              closeOnClickOutside={true}
              isValidDate={valid}
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              value={title}
              onChange= { handleInputChange }
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

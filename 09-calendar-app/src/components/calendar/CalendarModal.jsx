

import { useState } from 'react';
import Modal from 'react-modal';

// fijate que Modal es un HOC super-configurable
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

// en React o Angular el selector más alto
Modal.setAppElement('#root');

export const CalendarModal = () =>  {

  const [ isOpen, setIsOpen ] = useState(true);
  
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
       <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1>Hola mundo desde React-Modal</h1>
        <hr />
        <span>ESto es un span cara de pan</span>
      </Modal>
    </div>
  )
}

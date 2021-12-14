import React from 'react';
import './loginScreen.css';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/authActions';
import Swal from 'sweetalert2';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lEmail: 'test@test.com',
    lPassword: 'ABCabc123'
  } );
  const { lEmail, lPassword } = formLoginValues;

  
  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: '',
    rEmail: '',
    rPassword: '',
    rPassword2: ''
  } );
  const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if(rPassword !== rPassword2){
      return Swal.fire('Error','Las contraseñas no coinciden','error');
    }
    
    dispatch(startRegister(rName, rEmail, rPassword));

  }
  
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
         
          <form onSubmit={ handleLogin} >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                value={lEmail}
                onChange={handleLoginInputChange}
                name="lEmail"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={lPassword}
                onChange={handleLoginInputChange}
                name="lPassword"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={rName}
                onChange={handleRegisterInputChange}
                name="rName"
                
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={rEmail}
                onChange={handleRegisterInputChange}
                name="rEmail"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={rPassword}
                onChange={handleRegisterInputChange}
                name="rPassword"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                value={rPassword2}
                onChange={handleRegisterInputChange}
                name="rPassword2"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta" />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default React.memo(LoginScreen);
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { setError, removeError } from "../actions/uiActions";
import { startRegisterWithEmailPasswordName } from "../actions/authActions";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  // el hook useSelector viene de Redux
  const { ui:{ msgError }} = useSelector( state => state )
  
  //Tarea obtener info de cada uno de los campos del formulario
  const initialState = {
    name: "Hernando",
    email: "user01@gmail.com",
    password: "123456",
    password2: "123456",
  };

  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // console.log("Formulario correcto");
       dispatch( startRegisterWithEmailPasswordName( email,password,name ));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match between them"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
     
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>

        {
          msgError && <div className="auth__alert-error">{ msgError }</div>
        }
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={false}
        >
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already Registered?
        </Link>
      </form>
    </>
  );
};

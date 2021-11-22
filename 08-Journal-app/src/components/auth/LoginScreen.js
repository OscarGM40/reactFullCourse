import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/authActions";
// import validator from "validator";
// import { removeError, setError } from "../actions/uiActions";

export const LoginScreen = () => {
  
  const dispatch = useDispatch();

  const { ui:{ msgError,loading }} = useSelector( state => state )

  const [formValues, handleInputChange ] = useForm({
    // email: "user01@gmail.com",
    // password: "123456",
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    // if(isLoginValid()){
      dispatch( startLoginEmailPassword(email,password) );
    // }
  };

 /*  const isLoginValid = () => {

    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  }; */

  const handleGoogleLogin = () => {
    // console.log('objecheyt')
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={ handleLogin } 
      className="animate__animated animate__fadeIn animate__fast">
      {
          msgError && <div className="auth__alert-error">{ msgError }</div>
        }
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

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={ loading }
        >
          Login
        </button>

        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div 
          className="google-btn"
          onClick={ handleGoogleLogin }
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};

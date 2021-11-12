import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  //Obtener la referencia al context
  const userContext = useContext(UserContext);

  //Extraer el setUser
  const { setUser } = userContext;
  //
  const user = {
    id: 1234,
    name: "John",
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => setUser(user)}>
        login
      </button>
    </div>
  );
};

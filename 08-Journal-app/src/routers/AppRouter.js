//AppRouter es el sistema de rutas principal
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  // Route,
  Switch,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notesActions";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // al poner un efecto con ninguna dependencia solo se va a ejecutar una vez
  useEffect(() => {
    // regresa un firebase.unsubscribe,vamos,que crear un Observable
    firebase.auth().onAuthStateChanged( (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
    // fijate que me pedia poner 'dispatch' como dependencia,pero realmente nunca va a cambiar.Puedo estar tranquilo poniendole que no redisparará el efecto
  }, [dispatch,setIsLoggedIn,setChecking]);

  if (checking) {
    return <h1>Please,wait...</h1>;
  }

  return (
    <Router>
      <Switch>
        {/* <Route path="/auth" component={AuthRouter} /> */}
        {/* recuerda que la clave de todo es que esta ruta devuelve otro sistema de rutas */}
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isLoggedIn={isLoggedIn}
        />
        {/* <Route exact path="/" component={JournalScreen} /> */}
        {/* diria que si fuera mi app devolvería otro sistema de rutas aqui.Todas ellas privadas */}
        <PrivateRoute
          exact
          path="/"
          component={JournalScreen}
          isLoggedIn={isLoggedIn}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

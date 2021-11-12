import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";
import { NotFoundComponent } from "./NotFoundComponent";

export const AppRouter = () => {
  return (
    <Router>
      <>
      <NavBar />
   <div className="container">
        <Switch>
           <Route exact path="/" component={ HomeScreen } />
           <Route exact path="/about" component={ AboutScreen } />
           <Route exact path="/login" component={ LoginScreen } />
           {/* <Route component={ NotFoundComponent } /> */}
           <Redirect to="./" /> 
        </Switch>
   </div>
      </>
    </Router>
  );
};

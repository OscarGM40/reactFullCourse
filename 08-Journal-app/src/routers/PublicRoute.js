import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
         // si si esta logeado le llevo al home,es un sistema perfecto asinto,FH es DIOS
        !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
   isLoggedIn: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired,
}
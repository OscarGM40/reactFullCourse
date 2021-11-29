

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
 
// si existen las herramientas para redux en mis DevTools las va a configurar,si no pues no hace nada ya que no existen :D
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// createStore necesita un reducer como primer arg,logicamente será la combinación de todos ellos
export const store  = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)


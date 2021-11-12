//al usar redux ya no podemos ir por createContext,logicamente
import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk';

//el objeto del argumento de combineReducers será la estructura del 
// store,es un lugar para combinar reducers(aunque tenemos uno solo)

const composeEnhancers =(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   auth:authReducer,
   ui: uiReducer,
});

//este store lo deberemos usar en un punto alto de nuestra aplicacion(usaremos el componente JournalApp)
export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware( thunk ) )
      // applyMiddleware(thunk.withExtraArgument(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
  
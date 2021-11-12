import React from 'react';
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp'
import './index.css'
import CounterApp from './CounterApp'


const divRoot =document.querySelector('#root')
//console.log(divRoot)
// un return () implica que devuelvo un objeto dentro de ĺos paréntesis
ReactDOM.render(
//<CounterApp />
  <CounterApp value={12} 
  /> 
// <PrimeraApp saludo="Hola,soy Goku" />
,
divRoot)
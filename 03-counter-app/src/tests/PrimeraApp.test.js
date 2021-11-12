import React from 'react'
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
   
    test('Debe de mostrar el mensaje "Hola soy Goku"', () => {
      const saludo = 'Hola, soy Goku';
      const wrapper = render(<PrimeraApp saludo={saludo} />)
      expect( wrapper.getByText(saludo) ).toBeInTheDocument();
   }) 
   // Shallow es de enzyme,permite ver el componente como un arbol DOM y buscar con find() o hacer snapshots().También permite simular eventos.
   test('debe de mostrar <Primera App /> correctamente', () => {
      const saludo = 'Hola, soy Goku';
      const wrapper = shallow(
      <PrimeraApp 
      saludo={saludo}
       />)

      expect(wrapper).toMatchSnapshot();
   })

   test('debe de mostrar el subtitulo enviado por props', () => {
      const saludo = 'Hola, soy Goku';
      const subtitulo = 'soy un subtitulo'
      const wrapper = shallow(
         <PrimeraApp 
         saludo={saludo}
         subtitulo={subtitulo}
         />);
      
      //wrapper.find es muy parecido al queryselector de JS
      //si hubiera varios regresa un Array, en este caso solo habra 1
      const textoParrafo = wrapper.find('p').text()
      //console.log(textoParrafo)
      expect(textoParrafo).toBe(subtitulo);
   })

   test('Debe de mostrar el saludo pasado por props', () => {
      const titulo = "ouyea"
      const subtitulo = "asinto"
      const wrapper = shallow(<PrimeraApp 
         saludo={titulo}
         subtitulo={subtitulo}
      />)

      const texto = wrapper.find('h1').text().trim();
      expect(titulo).toBe(texto);
      
   })
   
   
   
   
})

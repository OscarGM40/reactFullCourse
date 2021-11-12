import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas en CounterApp', () => {
   
   let wrapper = shallow(<CounterApp />);
   //la funcion beforeEach se ejecuta antes de cada prueba
   beforeEach(() => {
      wrapper = shallow(<CounterApp />);
   })

   test('Debe de mostrar CounterApp correctamente', () => {
      //shallow crea la snapshot?      
      expect(wrapper).toMatchSnapshot();
   })

   test('debe de mostar 100 por defecto', () => {
      
      const wrapper = shallow(<CounterApp value={100} />);
      const valor = parseInt(wrapper.find('h2').text().trim());
      expect(valor).toBe(100);
   })
   
   test('debe de incrementar el contador en 1', () => {
      
      // const btn1 = wrapper.find('button').at(0);
      wrapper.find('button').at(0).simulate('click');
     // console.log(btn1.html());

     const counterText = parseInt(wrapper.find('h2').text().trim());

     expect(counterText).toBe(11)

   })
   
   test('debe de decrementar el contador en 1', () => {
      
      wrapper.find('button').at(1).simulate('click');
      const counterText = parseInt(wrapper.find('h2').text().trim());
      expect(counterText).toBe(9)
   })

   
   test('debe de colocar el valor por defecto al hacer reset', () => {
      const wrapper = shallow(<CounterApp value={105} />);
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(2).simulate('click');
      const counterText = parseInt(wrapper.find('h2').text().trim());
      expect(counterText).toBe(105)

   })
   
   test('debe de mostrar 104', () => {
      const wrapper = shallow(<CounterApp value={106} />);
         wrapper.find('button').at(0).simulate('click');
         wrapper.find('button').at(1).simulate('click');
         wrapper.find('button').at(2).simulate('click');
         wrapper.find('button').at(1).simulate('click');
         wrapper.find('button').at(1).simulate('click');
         const value = parseInt(wrapper.find('h2').text().trim());
         expect(value).toBe(104);
   })
   
   
})

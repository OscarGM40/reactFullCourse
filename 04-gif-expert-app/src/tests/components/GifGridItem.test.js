import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en GifGridItem', () => {
   
   const props = { 
      title:"Un titulo",
      url:"http://www.w3.org/1999/"
   }
   const wrapper = shallow(<GifGridItem { ...props }/>);
   
   test('debe de mostrar el componente', () => {
      
      expect(wrapper).toMatchSnapshot();

   })

   test('debe de tener un parrafo con el titulo', () => {
      
      const parrafo = wrapper.find('p').text().trim();
      const { title } = props;
      expect(parrafo).toBe(title) 

   })
   
   test('debe de tener imagen igual al url y al de los props', () => {
      
      const img = wrapper.find('img');
      //console.log(img.html(),'metodo html')
      //console.log(img.props().src,'metodo props.atributo')
      //console.log(img.prop('alt'),'metodo prop(atributo)')

      expect(img.prop('src')).toBe(props.url);
      expect(img.prop('alt')).toBe(props.title);

   })

   test('debe de tener cierta clase CSS', () => {
      
      const div = wrapper.find('div');
      //console.log(div.props().className,'props del div');
      const clases = div.props().className.split(' ');

      expect(clases[2]).toBe("animate__bounce");
      expect(div.prop('className').includes('animate__bounce')).not.toBe(false);
      expect(div.hasClass('animate__bounce')).toBeTruthy();
   })
   
   
   
})

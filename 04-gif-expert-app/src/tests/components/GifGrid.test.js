import React from 'react';
import GifGrid from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en componente GifGrid', () => {
   
   const category = "cat";
      
   test('Debe de hacer match con el snapshot', () => {
      
      useFetchGifs.mockReturnValue({ 
         data: [], 
         loading: true,
      })
      
      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   })
   
   test('debe de mostrar items cuando se cargan imagenes con useFecthGifs', () => {
      //un mock es un señuelo
      
      const gifs = [{ 
         id: 'ABC',
         url: 'http://localhost/cualquiercosa/jpg', 
         title: 'Cualquier cosa'
      }]
      
      useFetchGifs.mockReturnValue({ 
         data: gifs, 
         loading: false,
      })
      
         const wrapper = shallow(<GifGrid category={category} />);
         expect(wrapper).toMatchSnapshot();
         expect( wrapper.find('p').exists() ).toBeFalsy();

         expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ) 
   })
   
})

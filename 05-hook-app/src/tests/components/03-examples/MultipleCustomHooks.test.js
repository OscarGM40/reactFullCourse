import { shallow } from "enzyme"
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks"
import useCounter from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock("../../../hooks/useCounter");


describe('Pruebas en componente 03-examples/MultipleCustomHook', () => {
   
   beforeEach(() => {
   
      useCounter.mockReturnValue({
         counter:10,
         increment: () => {}
      })
   })

   test('Debe de hacer match con la snapshot', () => {
     
      useFetch.mockReturnValue({
         data:null,
         loading:true,
         error: null
      })

      const wrapper = shallow(<MultipleCustomHooks />)
      
      expect(wrapper).toMatchSnapshot();

   })

   test('Debe de mostrar la informacion', () => {
      
      useFetch.mockReturnValue({
         data:[{
            author:'Fernando',
            quote:'Hola mundo desde jest'
         }],
         loading:false,
         error: null
      })

      const wrapper = shallow(<MultipleCustomHooks />)

      expect(wrapper.find('.alert').exists()).toBeFalsy();
      expect(wrapper.find('p.mb-0').text().trim() ).toBe('Hola mundo desde jest');
      expect(wrapper.find('footer').text().trim() ).toBe('Fernando');

      console.log(wrapper.html())
   })
   
   
})

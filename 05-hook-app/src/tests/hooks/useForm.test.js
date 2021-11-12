import { renderHook,act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Pruebas en nuestro custom Hook useForm', () => {
   
   test('Debe de regresar un formulario con valores iguales a initialForm', () => {

      //este hook retornaba un arreglo con values,handleInputChange y reset
      const initialForm = {
         name:'Fernando',
         email:'fernando@email.com'
      }
      const {result} = renderHook( ()=> useForm(initialForm) );
         const [values,handleInputChange,reset] = result.current

       act(()=>{
         reset();
      }) 

       expect(values).toEqual(initialForm);
       expect(typeof handleInputChange).toBe("function");
       expect(typeof reset).toBe("function");
      
   })


   test('Debe de cambiar el valor del formulario(cambiar name )', () => {

      const initialForm = {
         name:'Fernando',
         email:'fernando@email.com'
      }

      const { result } = renderHook( ()=> useForm(initialForm) );
        const [ ,handleInputChange] = result.current

       act( ()=>{

          handleInputChange( {
             target: {
                 name: 'name',
                 value:"Melissa" 
          }})
      
      });

      const [values] = result.current;

      expect(values).toEqual({...initialForm,name: 'Melissa'});


   })

   test('Debe de reestablecer el formulario con la funcion reset', () => {
     
      const initialForm = {
         name:'Fernando',
         email:'fernando@email.com'
      }

      const { result } = renderHook( ()=> useForm(initialForm) );
        const [ ,handleInputChange,reset] = result.current;

        act(()=>{
           handleInputChange({ 
              target:{
                 name:'name',
                 value:'joker'
              }
           });
           reset();
        })
        const [r] = result.current 
        expect(r).toEqual(initialForm);


   })
   
   
   
})

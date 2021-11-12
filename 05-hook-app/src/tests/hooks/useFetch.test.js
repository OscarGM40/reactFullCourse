import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('Pruebas en el customHook useFetch', () => {
   
test('Debe de retornar la informacion por defecto', () => {
   //el hook devuelve el state que es un objeto de 3 propiedades ,data [],loading y error
   
   const { result } = renderHook(()=> useFetch( `https://www.breakingbadapi.com/api/quotes/1`));

   const { data, loading, error } = result.current;

   //si lo hacemos sincrono deberiamos esperar que no haya sido realizada la peticion
   //toBe puede llevar cualquier primitivo como argumento
   expect( data ).toBe(null);
   expect( loading ).toBe(true);
   expect( error ).toBe(null);
   
})

test('Debe de manejar el error', async () => {

   const { waitForNextUpdate, result  } = renderHook(()=> useFetch( `https://reqres.in/apid/users?page=2`));
   
   await waitForNextUpdate();
   //hay que esperar a la llamada para asignar los valores,si no vendran igual que en la prueba anterior 
   const { data, loading, error } = result.current;

   expect ( data ).toBe(null);
   expect ( loading ).toBe(false);
   expect ( error ).toBe('No se pudo cargar la info');

})



})

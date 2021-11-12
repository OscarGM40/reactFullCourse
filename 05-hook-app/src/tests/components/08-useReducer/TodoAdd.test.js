import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { demoTodos } from "../fixtures/demoTodos";


describe('Pruebas en componente <TodoAdd />', () => {
   
   const handleAddTodo = jest.fn();

   const wrapper = shallow(<TodoAdd
      handleAddTodo={handleAddTodo} />);

   const newTodo = demoTodos[0];


   test('Debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   })

   test('NO debe de llamar a handleAddTodo', () => {
      //podemos llamar a la propiedad pues hicimos <form onSubmit ....  asi que la tenemos como propiedad tmb
      const formSubmit = wrapper.find('form').prop('onSubmit');
      //console.log(formSubmit) debe dar una funcion
      formSubmit({preventDefault(){}});
      //hagamos una asercion
      expect(handleAddTodo).toHaveBeenCalledTimes(0)
   })
   
   test('Debe de llamar la funcion handleAddTodo', () => {
      //con un argumento || simplemente que sea llamado
      const value = 'Aprender React';

      wrapper.find('input').simulate('change',{
         target:{
            value:value,
            name:"description"
         }
      });

      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({preventDefault(){}});

      expect(handleAddTodo).toHaveBeenCalledTimes(1)
      expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));

      expect(handleAddTodo).toHaveBeenCalledWith({
         id: expect.any(Number),
         desc:value,
         done:false
      });
      
//podemos esperar que se haya reseteado el formulario y por ello el value del input sea una cadena vacia
      expect(wrapper.find('input').prop('value')).toBe('');

   })
   
   
   
})

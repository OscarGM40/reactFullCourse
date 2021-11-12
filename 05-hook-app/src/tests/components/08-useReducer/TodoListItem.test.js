import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../fixtures/demoTodos"

const todo =demoTodos[0];

describe('Pruebas en <TodoListItem />', () => {
   
   const handleDelete =jest.fn();
   const handleToggle =jest.fn();

   let wrapper = shallow(<TodoListItem
      todo={todo}
      indice={1}
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
      />)

      beforeEach(() => {
         jest.clearAllMocks();
         wrapper = shallow(<TodoListItem
            todo={demoTodos[0]}
            indice={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            />)
      })

   test('Debe de mostrarse correctamente', () => {
      
         expect(wrapper).toMatchSnapshot();
   })

   test('Debe de llamar a la funcion handleDelete', () => {
      const boton = wrapper.find('.btn-danger')
      boton.simulate('click')
      expect(handleDelete).toHaveBeenCalledTimes(1);
      //podemos pasarlo asi o simplemente podiamos poner el 1
      expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
      //expect(handleDelete).toHaveBeenCalledWith(expect.any('number'))


   })

   test('Debe de llamar a la funcion handleToggle', () => {
      wrapper.find('p').simulate('click');
      expect(handleToggle).toHaveBeenCalledTimes(1);
      //espera el id del objeto y como es demoTodos[0] es el 1
      expect(handleToggle).toHaveBeenCalledWith(1);

   })

   test('Debe de mostrar el texto correctamente', () => {
      //contenido del parrafo debe ser el que esperamos
      expect (wrapper.find('p').text().trim()).toContain('Aprender React')
      expect (wrapper.find('p').text().trim()).toBe('2. Aprender React')
      expect (wrapper.find('p').text().trim()).toBe(`${1 + 1}. ${demoTodos[0].desc}`)

   })

   test('Debe de tener la clase complete si el done es true', () => {

      const todo = demoTodos[0]
      todo.done = true
      
      const wrapper = shallow(<TodoListItem 
         todo={todo} />)

      expect(wrapper.find('p').hasClass('complete')).toBe(true);

   })
   
   
   
})

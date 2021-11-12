import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas en <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener tres <TodoListItem />,segun el array demoTodos", () => {
    //  console.log(wrapper.html());
    //es mejor evaluarlo contra la longitud del array de fakedata y no contra el numero en si
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    //metodos utilisimos --at(0)--html()--props()--prop('handleDelete')
    //console.log(wrapper.find("TodoListItem").at(0).html());
    //console.log(wrapper.find("TodoListItem").at(0).props());
    //como son objetos diferentes apuntan a espacios de memoria diferentes y hay que usar el toEqual
    //toBe usa el operador de equidad === y con objetos va dar false
    expect(wrapper.find("TodoListItem").at(0).prop('handleDelete')).toEqual(expect.any(Function));


    
    
  });
});

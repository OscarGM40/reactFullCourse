import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
    expect(state.length).toBe(3);
  });

  test("Debe de agregar un TODO", () => {
    const newTodo = {
      type: "add",
      payload: {
        id: 4,
        desc: "Aprender Spring",
        done: false,
      },
    };
    const state2 = todoReducer(demoTodos,newTodo);
    expect(state2.length).toBe(4);
    expect(state2).toEqual( [...demoTodos,newTodo.payload] );

  });

  test('Debe de borrar un TODO', () => {
     //el action.payload debe ser igual al id del TODO 
     const actionDelete = {
        type: 'delete',
        payload: 3
     }
     const state = todoReducer(demoTodos,actionDelete);
     expect(state.length).toBe(2);
     expect(state.find(toDo => toDo.id === 3)).toBe(undefined);
     expect(state).toEqual([demoTodos[0],demoTodos[1]]);
  })

  test('Debe de hacer el TOGGLE del TODO', () => {
   const actionToggle = {
      type: 'toggle',
      payload: 3
   }
   const state = todoReducer(demoTodos,actionToggle);

   //console.log(state[2].done,'state')
   expect(state[2].done).toBe(true);
   expect(state[1]).toEqual(demoTodos[1])


  })
  
  
});

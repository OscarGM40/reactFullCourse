import React, { useEffect, useReducer } from "react";
import "./styels.css";
import { todoReducer } from "./todoReducer";
// import { useForm } from '../../hooks/useForm';
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const init = () => {
  
  return JSON.parse(localStorage.getItem('todos')) || [];

}


export const TodoApp = () => {

  //Forma 1
  const [todos, dispatch] = useReducer(todoReducer, [], init);


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])


const handleDelete = (id) => {
  const actionA = {
    type:'delete',
    payload:id
 }
 dispatch(actionA)
}

const handleToggle = (id) => {

  dispatch({
    type:'toggle',
    payload:id
  })

}

const handleAddTodo = (newTodo) => {
  dispatch({
    type:'add',
    payload:newTodo
 })
}

 return (
    <div>
      <h1>Todo App ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          Todos

          {/* TodoList,todos,todoListItem,todo,indice,handledelete,handletoogle */}
          <TodoList 
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          >


          </TodoList 
          >
         {/*  <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                
                <p className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger"
                onClick={()=> handleDelete(todo.id)}>Borrar</button>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="col-5">
          <TodoAdd 
           handleAddTodo={handleAddTodo}
          
          />


           </div>
      </div>
    </div>
  );
};

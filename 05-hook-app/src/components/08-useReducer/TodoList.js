import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
   return (
      <ul>
       {todos.map((
          (todo,index) => <TodoListItem 
          key={todo.id}
          indice={index}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
           />
       ))}  
      </ul>
   )
}

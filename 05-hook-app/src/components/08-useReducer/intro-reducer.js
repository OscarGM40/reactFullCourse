console.log('hola mundo')

const initialState = [{
   id:1,
   todo:'comprar leche',
   done:false
}]
//fijate como podria hacerse con ifs tmb
const todoReducer = ( state=initialState,action ) => {

 /*   if(action?.type === 'agregar') {
      return [{...state},action.payload]
   } */
   switch(action?.type) {
      case 'agregar':
         return [...state,action.payload];
      default:
         return state
   }

   // return state;
} 

let todos = todoReducer();

//No usen el push si estan trabajando en React.array.push muta el objeto
const newTodo = {
   id:2,
   todo:'comprar pan',
   done:false
}
//Para agregar esta tarea hay que definir una accion.Una accion es un simple objeto
//Es un estandar que tenga como primera propiedad a 'type'.Indica que tipo de accion es
//Tmb es un estandar que los datos mandados esten en la propiedad 'payload'

const agregarTodoAction = {
   type: 'agregar',
   payload:newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)
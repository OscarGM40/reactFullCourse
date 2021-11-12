
export const todoReducer = (state= [], action) => {
   //JS usa comparacion estricta o triple igual ===
   switch (action.type) {
       case 'add':
         return [ ...state, action.payload ];
      case 'delete':
         return state.filter(todo => todo.id !== action.payload);//es obvio que el payload será solo el id asin
      case 'toggle':
         return state.map(todo => 
            (todo.id === action.payload ) 
            ? {...todo, done: !todo.done}
            : todo
            )   
      case 'toggle-old':
         return state.map(todo => {
            if( todo.id === action.payload){
               return {
                  ...todo,
                  done:!todo.done
               }}else{
                  return todo
               }
         })

      default:
         return state;
   }
}
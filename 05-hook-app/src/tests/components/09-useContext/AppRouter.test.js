import { mount } from "enzyme"
import { AppRouter } from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('Pruebas en <AppRouter />', () => {
   
   const user = {
      id:1,
      name: 'Fernando'
   }
   const setUser = jest.fn()

   const wrapper =  mount(
   <UserContext.Provider value={{user,setUser}}>
      <AppRouter />)
   </UserContext.Provider>)
   
   test('debe de mostrarse correctamente', () => {
   expect(wrapper).toMatchSnapshot();      
   })
   
   
})

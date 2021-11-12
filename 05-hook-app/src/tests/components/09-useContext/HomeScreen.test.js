import { mount, shallow } from "enzyme"
import { HomeScreen } from "../../../components/09-useContext/HomeScreen"
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('Pruebas en componente <HomeScreen />', () => {

   const user= {
      name:'fernando',
      email: 'fernando@email.com'
   }

   const wrapper = mount(
   <UserContext.Provider value={{user}}>
      <HomeScreen />
   </UserContext.Provider>)

   test('Debe de mostrar el componente correctamente', () => {
     
      expect(wrapper).toMatchSnapshot();
      
   })
   
   
})

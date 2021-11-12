import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginScreen />", () => {

   const setUser = jest.fn();
 
  const wrapper = mount(
    <UserContext.Provider value={{
       setUser: setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );


  test("Debe de mostrarse correctamente", () => {
    //que haga match con el snapshot(con mount)
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de ejecutar el set User con el argumento esperado", () => {
     
   wrapper.find('button').prop('onClick')();

     expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: "John",
    })
  });

  test('Debe de cambiar el argumento', () => {
    
    const user = {
      id: 1234,
      name: "John"
    }

    wrapper.find('button').prop('onClick')(user);
    expect(setUser).toHaveBeenLastCalledWith({
      id: 1234,
      name: "John"
    });
    
  })
  
});

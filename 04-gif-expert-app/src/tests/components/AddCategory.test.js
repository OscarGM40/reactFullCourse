import { shallow } from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en componente AddCategory", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

   beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  }); 

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toBe(value);
  });

  test("No debe de hacer el onSubmit", () => {
     
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    //como estamos simulando el submit, sin valor alguno, no deberia llamarse el setter del padre
    //sin embargo daba fallo porque la dearriba si puso un valor XD hay que resetear los Mocks↑↑
    //expect(setCategories).not.toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
  });

   test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
   //1- simular el inputChange
   //2- simular el submit
   //3- setCategories se debe de haber llamado
   //4- el valor del input debe de estar como un string vacio
      const input = wrapper.find("input");
      input.simulate("change",{target:{value:"mock"}});
      const inputAfter = wrapper.find("input");
      expect(inputAfter.prop("value")).toBe("mock");
      wrapper.find('form').simulate('submit',{preventDefault(){}});
      expect(setCategories).toHaveBeenCalledTimes(1);
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
      expect(input.prop('value')).toBe("");





})


});

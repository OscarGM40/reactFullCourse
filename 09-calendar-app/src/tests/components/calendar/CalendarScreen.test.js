import { mount } from "enzyme";
import { Provider } from "react-redux";
import CalendarScreen from "../../../components/calendar/CalendarScreen";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { messages } from "../../../helpers/calendar-messages";
import { uiOpenModal } from "../../../actions/uiActions";
import { eventSetActive } from "../../../actions/eventActions";
import { act } from "@testing-library/react";


jest.mock('../../../actions/uiActions', () => ({
  uiOpenModal: jest.fn(),
}));

jest.mock('../../../actions/eventActions', () => ({
  eventSetActive: jest.fn(),
  eventStartLoading: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  ui:{
    modalOpen: false,
  },
  calendar:{
    events:[],
    activeEvent:null
  },
  auth:{
    checking:false,
    uid:"61abd9e3c50cff184e2b128c",
    name:"Jane"
  },
};
const store = mockStore(initialState);
store.dispatch = jest.fn();
Storage.prototype.setItem = jest.fn();


const wrapper = mount(
  <Provider store={store}>
    <CalendarScreen />
  </Provider>
);

describe("Pruebas en el CalendarScreen", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Pruebas con eventos del ReactBigCalendar", () => {
    /* Fijate como con Find puedo buscar por el nombre de un Componente,como Fade o Paper,... */
    const calendar = wrapper.find("Calendar");
    
    /* ahora simplemente busco por la prop que necesite */
    const calendarMessages = calendar.prop("messages");
   
    /* ya puedo evaluar que sean los message que pre-establecimos */
    expect(calendarMessages).toEqual(messages);

    /* ya puedo evaluar que el doble click llame al uiOpenModal */
    
    calendar.prop("onDoubleClickEvent")();

    expect(uiOpenModal).toHaveBeenCalled();

    expect(store.dispatch).toHaveBeenCalledWith(uiOpenModal());

    /* ya puedo evaluar que el click llame al evento */
    calendar.prop("onSelectEvent")({
      start:"123",
      end:"456",
      title:"Evento",
    });

    expect(eventSetActive).toHaveBeenCalledWith({
      start:"123",
      end:"456",
      title:"Evento",
    });

    /* si yo cambio el view debería guardarse en el localStorage */
    act( () => {
      calendar.prop("onView")("month");
      expect(localStorage.setItem).toHaveBeenCalledWith("lastView", "month");
    } )
  })
  
});

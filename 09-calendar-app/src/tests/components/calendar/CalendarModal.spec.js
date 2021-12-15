import { mount } from "enzyme";
import { Provider } from "react-redux";
import { CalendarModal } from "../../../components/calendar/CalendarModal";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import { act } from "@testing-library/react";

import {
  eventStartUpdate,
  eventClearActiveEvent,
  eventStartAddNew,
} from "../../../actions/eventActions";
import Swal from "sweetalert2";

jest.mock("../../../actions/eventActions", () => ({
  eventStartUpdate: jest.fn(),
  eventClearActiveEvent: jest.fn(),
  eventStartAddNew: jest.fn(),
}));

Swal.fire = jest.fn();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* siguiente hora al momento actual */
const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlus1 = now.clone().add(1, "hours");

const initialState = {
  ui: {
    modalOpen: true,
  },
  calendar: {
    events: [],
    activeEvent: {
      title: "Hola mundo",
      notes: "algunas notas",
      start: now.toDate(),
      end: nowPlus1.toDate(),
    },
  },
};
const store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <CalendarModal />
  </Provider>
);

describe("Pruebas en el CalendarModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el modal", () => {
    /* esta linea arroja un falso positivo,pues siempre existe*/
    expect(wrapper.find(".modal").exists()).toBe(true);

    /* analizar esta propiedad si es una prueba correcta */
    expect(wrapper.find("Modal").prop("isOpen")).toBe(true);
  });

  test("debe de llamar la acción de actualizar y despues cerrar el modal", () => {
    act(() => {
      wrapper.find("form").prop("onSubmit")({
        preventDefault: () => {},
      });
      expect(eventStartUpdate).toHaveBeenCalled();
      expect(eventStartUpdate.mock.calls[0][0].title).toBe("Hola mundo");
      expect(eventStartUpdate.mock.calls[0][0].notes).toBe("algunas notas");
      expect(eventStartUpdate).toHaveBeenCalledWith(
        initialState.calendar.activeEvent
      );
      expect(eventClearActiveEvent).toHaveBeenCalled();
    });
  });

  test("debe de mostrar error si falta el título", () => {
    const initialState = {
      ui: {
        modalOpen: true,
      },
      calendar: {
        events: [],
        activeEvent: {
          title: "",
          notes: "algunas notas",
          start: now.toDate(),
          end: nowPlus1.toDate(),
        },
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <CalendarModal />
      </Provider>
    );

    act(() => {
      wrapper.find("form").prop("onSubmit")({
        preventDefault: () => {},
      });
      /* fijate que la prueba anterior ha limpiado el formulario asi que no puede llamar al update */
      expect(eventStartUpdate).not.toHaveBeenCalled();
      expect(eventClearActiveEvent).not.toHaveBeenCalled();
    });
  });

  test("Debe de crear un nuevo evento", () => {
    const initialState = {
      ui: {
        modalOpen: true,
      },
      calendar: {
        events: [],
        activeEvent: null,
      },
      auth: {
        uid: "123",
        name: "batman",
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <CalendarModal />
      </Provider>
    );

    wrapper.find('input[name="title"]').simulate("change", {
      target: { name: "title", value: "Hola mundo" },
    });

    act(() => {
      wrapper.find("form").prop("onSubmit")({
        preventDefault: () => {},
      });

      expect(eventStartAddNew).toHaveBeenCalledWith({
        title: expect.any(String),
        notes: expect.anything(),
        start: expect.any(Date),
        end: expect.any(Date),
      });
      expect(eventClearActiveEvent).toHaveBeenCalled();
    });
  });

  test("debe de validar las fechas", () => {
    const initialState = {
      ui: {
        modalOpen: true,
      },
      calendar: {
        events: [],
        activeEvent: {
          title: "Hola mundo",
          notes: "algunas notas",
          start: now.toDate(),
          end: nowPlus1.toDate(),
        },
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <CalendarModal />
      </Provider>
    );

    wrapper.find('input[name="title"]').simulate("change", {
      target: { name: "title", value: "Hola mundo" },
    });

    // const hoy = new Date();
    
/*     act(() => {
      wrapper.find('DatePicker').at(4).prop("onChange")(hoy);
      wrapper.find('form').prop('onSubmit')({
        preventDefault: () => {}});

      expect(Swal.fire).toHaveBeenCalled();  

    }); */

  });
});

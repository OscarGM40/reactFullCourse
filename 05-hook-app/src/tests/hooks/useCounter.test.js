import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("Pruebas en customHook useCounter", () => {

  test("Debe de retornar el tipo de los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    //console.log(result.current);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  
  test("Debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("Debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    
    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);

  });

  test("Debe de decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    
    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);

  });

  test("Debe de resetear el counter a 100 nuevamente", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment,reset } = result.current;
    
    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);

  });
  
  
});

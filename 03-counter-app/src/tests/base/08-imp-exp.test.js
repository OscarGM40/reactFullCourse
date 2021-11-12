import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  test("debe de retornar un heroe por id", () => {
    //deberiamos comprobar si existe el id
    const id = 1;
    const idTest = 1;
    const heroe = getHeroeById(id);
    //console.log(heroe)

    const heroeData = heroes.find((h) => h.id === idTest);
    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar undefined si el heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    //console.log(heroe)

    expect(heroe).toBe(undefined);
  });
  //debe de retonar un arreglo con los heroes de DC
  test("debe de retornar un arreglo con los heroes de DC", () => {
    // no era necesario crear dos variables con el string DC
    const owner = "DC";
    const ownerTest = 'DC';
    const heroe = getHeroesByOwner(owner);
    // console.log(heroe)
    const heroesF = heroes.filter((h) => h.owner === ownerTest);
    // console.log(heroesF)
    expect(heroe).toEqual(heroesF);
  });

  //debe de retornar un arreglo con los heroes de Marvel
  //length=2
  test("debe de retornar 2", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    //  console.log(heroe)
    expect(heroe.length).toBe(2);
  });
});

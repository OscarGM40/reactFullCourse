import { fetchConToken, fetchSinToken } from "../../helpers/fetch";

describe("Pruebas en el helper fetch.js", () => {

  let token ="";
  
  test("fetch sin token debe de funcionar", async () => {
    const resp = await fetchSinToken(
      "auth",
      {
        email: "test@test.com",
        password: "ABCabc123",
      },
      "POST"
    );

    expect( resp instanceof Response ).toBe(true);
    const body = await resp.json();
    expect( body.ok ).toBe(true);
    expect( body.token ).toBeDefined();
    token = body.token;


  });

  test("fetch con token debe de funcionar", async () => {
    localStorage.setItem("token", token);

    const resp = await fetchConToken(
      "events/61ad1a4cb2f69f692ba17a79",
      {},"DELETE");
    const body = await resp.json();
    expect( body.ok ).toBe(false);
    expect(body.msg).toBe("evento no encontrado");

    });
    
});

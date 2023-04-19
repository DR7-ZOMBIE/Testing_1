const { arrProvincias, arrDias } = require("../calculadora.js") 

describe("Provincias y días:", () => {
  test("Comprobando Array Provincias", () => {
    expect(arrProvincias()).toHaveLength(7);
  });

  test("Comprobando Array Días", () => {
    expect(arrDias()).toHaveLength(8);
  });
});
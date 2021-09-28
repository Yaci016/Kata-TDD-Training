import { rot13 } from "./rot13";
describe("ROT13 Tests", () => {
  it("should return number/special characters as they are when passed as parameter", () => {
    const parameters = "125";
    const result = rot13(parameters);
    expect(result).toEqual("125");
  });
  it("should return 'GRFG' when 'TEST' passed as parameter", () => {
    const parameters = "TEST";
    const result = rot13(parameters);
    expect(result).toEqual("GRFG");
  });
  it("should return 'grfg' when 'test' passed as parameter", () => {
    const parameters = "test";
    const result = rot13(parameters);
    expect(result).toEqual("grfg");
  });
  it("should return 'grFg15*' when 'teSt15*' passed as parameter", () => {
    const parameters = "teSt15*";
    const result = rot13(parameters);
    expect(result).toEqual("grFg15*");
  });
  it("should return 's2uwa' when 'f2hjn' passed as parameter", () => {
    const parameters = "N";
    const result = rot13(parameters);
    expect(result).toEqual("A");
  });
});

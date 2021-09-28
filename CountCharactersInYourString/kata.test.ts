import { kata } from "./kata";
describe("count Characters in string Tests", () => {
  it("should return empty object when empty string passed as parameter", () => {
    const params: string = "";
    const result: { [x: string]: number } = kata(params);
    expect(result).toStrictEqual({});
  });

  it("should return object {a:2} when 'aa' string passed as parameter", () => {
    const params: string = "aa";
    const result: { [x: string]: number } = kata(params);
    expect(result).toStrictEqual({ a: 2 });
  });

  it("should return object {a:2,z:1} when 'aza' string passed as parameter", () => {
    const params: string = "aaz";
    const result: { [x: string]: number } = kata(params);
    expect(result).toStrictEqual({ a: 2, z: 1 });
  });
});

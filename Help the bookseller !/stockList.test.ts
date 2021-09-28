import { stockList } from "./stockList";
let b, c, res;
describe("Help the Bookseller kata tests", () => {
  it("should return an empty string if any or both of the two params are empty", () => {
    const listOfArt = [];
    const listOfCat = [""];
    const result = stockList(listOfArt, listOfCat);
    expect(result).toEqual("");
  });
  it('should return (A : 20) string if list of stock {"ABART 20", "CDXEF 50"} and list of categories {"A", "B"} passed as parameters', () => {
    const listOfArt = ["ABART 20", "CDXEF 50"];
    const listOfCat = ["A", "B"];
    const result = stockList(listOfArt, listOfCat);
    expect(result).toEqual("(A : 20) - (B : 0)");
  });
  it('should return (A : 40) string if list of stock {"ABART 20", "CDXEF 50","ABAST 20"} and list of categories {"A", "B"} passed as parameters', () => {
    const listOfArt = ["ABART 20", "CDXEF 50", "ABAST 20"];
    const listOfCat = ["A", "B"];
    const result = stockList(listOfArt, listOfCat);
    expect(result).toEqual("(A : 40) - (B : 0)");
  });
  it('should return  (A : 200) - (C : 0) - (B : 1140) string if list of stock {"ABART 200", "CDXEF 0","BBAST 1140"} and list of categories {"A", "C" ,"B"} passed as parameters', () => {
    b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
    c = ["A", "B", "C", "W"];
    res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)";
    expect(stockList(b, c)).toEqual(res);
  });
});

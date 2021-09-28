export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  let qs = {};
  if (!listOfArt.length) return "";

  listOfArt.forEach((art) => {
    const cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(" ")[1];
  });

  return listOfCat
    .map((c) => {
      return "(" + c + " : " + (qs[c] | 0) + ")";
    })
    .join(" - ");
};

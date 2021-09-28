export const rot13 = (str: string): string => {
  const alphabetMin = "abcdefghijklmnopqrstuvwxyz";
  const alphabetMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let temp;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let indexMin = alphabetMin.indexOf(str[i]);
    let indexMaj = alphabetMaj.indexOf(str[i]);

    if (/[a-z]/.test(str[i])) {
      indexMin += 13;
      if (indexMin >= 26) indexMin -= 26;
      temp = alphabetMin.charAt(indexMin);
      indexMin;
    } else if (/[A-Z]/.test(str[i])) {
      indexMaj += 13;
      if (indexMaj >= 26) indexMaj -= 26;
      temp = alphabetMaj.charAt(indexMaj);
      indexMaj;
    } else {
      temp = str[i];
    }
    result += temp;
  }

  return result;
};

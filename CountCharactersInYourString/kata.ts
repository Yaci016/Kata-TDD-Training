export const kata = (str: string): { [x: string]: number } => {
  let result = {} as { [x: string]: number };
  str.split("").forEach((y) => {
    if (!result[y]) result[y] = str.split(y).length - 1;
  });
  return result;
};

const calculate = (x: number): number => {
  let res = 1;
  do {
    res = res * x;
    x = x - 1;
  } while (x > 0);
  return res;
};

export { calculate };

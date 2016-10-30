// BEGIN (write your solution here)
export const check = (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  } else if ((a === b && c === d) || (a > b && c > d) || (a < b && c < d)) {
    return 1;
  }
  return 0;
};
// END

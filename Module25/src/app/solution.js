// BEGIN (write your solution here)
export const calc = (a, b, c) => {
  switch (a) {
    case "+":
      return b + c;
    case "-":
      return b - c;
    case "/":
      return b / c;
    case "*":
      return b * c;
    default:
      return NaN;
  }
};
// END

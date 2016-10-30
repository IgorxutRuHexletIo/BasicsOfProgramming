// BEGIN (write your solution here)
const square = (x) => {
  return x * x;
};

const sumOfSquares = (x, y) => {
  return square(x) + square(y);
};

const squareSumOfSquares = (x, y) => {
  return square(sumOfSquares(x, y));
};
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

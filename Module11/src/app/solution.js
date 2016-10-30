import sqrt from './sqrt';

// BEGIN (write your solution here)
export default (a, b) => {
  return 1 / 2 * a * sqrt(b * b - a * a / 4);
};
// END

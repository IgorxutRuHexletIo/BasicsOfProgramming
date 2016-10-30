// BEGIN (write your solution here)
export const smallestDivisor = (n) => {
  const iter = (d) => {
    if (n === 1) {
      return 1;
    } else if (n % d === 0) {
      return d;
    } else {
      return iter(d + 1);
    }
  };
  return iter(2);
};
// END

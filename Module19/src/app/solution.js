// BEGIN (write your solution here)
export const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  }

  let div = 2;
  while (num % div !== 0) {
    div += 1;
  }

  return div;
};
// END

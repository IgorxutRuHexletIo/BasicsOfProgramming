// BEGIN (write your solution here)
export const isPrime = (n) => {

  if (n < 2) {
    return false;
  }

  let d = 2;
  while (d * d <= n && n % d !== 0) {
    d += 1;
  }

  return d * d > n;
};
// END

// BEGIN (write your solution here)
export default (m, n) => {

  while (m != n) {
  	if (m > n) {
  		m = m - n;
  	} else {
  		n = n - m;
  	}
  }

  return m;
};
// END

import * as strings from './strings';

// BEGIN (write your solution here)
export const reverse = (str) => {
  let r_str = '';

  for (let i = strings.length(str) - 1; i >= 0; i--) {
    r_str += str[i];
  }

  return r_str;
};
// END

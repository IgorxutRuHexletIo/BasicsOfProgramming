import * as strings from './strings';

// BEGIN (write your solution here)
const sum = (str) => {
  let len_str = strings.length(str);
  let sum = Number(0);

  for (let i = 0; i < len_str; i++) {
    sum += Number(str[i]);
  }

  return sum;
};

export const addDigits = (num) => {
  let sum_str_num = sum(String(num));
  let len_str_num = strings.length(String(sum_str_num));

  while (len_str_num > 1) {
    sum_str_num = sum(String(sum_str_num));
    len_str_num = strings.length(String(sum_str_num));
  }

  return sum_str_num;
};
// END

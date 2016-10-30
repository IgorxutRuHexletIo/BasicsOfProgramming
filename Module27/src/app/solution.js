import * as strings from './strings';

// BEGIN (write your solution here)
export default (str) => {
  let new_str = "";
  let len = strings.length(str);
  let prev_char = " ";
  let cur_char = str[0];

  for (let i = 0; i < len; i++) {
    cur_char = str[i];
  
    if (prev_char === " ") {
      new_str += strings.toUpperCase(cur_char);
    } else {
      new_str += cur_char;
    }
  
    prev_char = cur_char;
  }

  return new_str;
};
// END

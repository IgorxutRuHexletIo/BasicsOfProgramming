import * as strings from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let len = strings.length(str);
  let bl_count = 0;

  for (let i = 0; i < len; i++) {
    if (str[i] === strings.toUpperCase(str[i])) {
      bl_count++;
    }
  }

  return bl_count;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

export const greaterThan = (first, second) => {
  return compare(first, second) === 1;
};

export const lessThan = (first, second) => {
  return compare(first, second) === -1;
};
// END

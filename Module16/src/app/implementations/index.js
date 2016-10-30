export let factorial;

switch (process.env.RESULT) {
  case 'pass':
    factorial = (num) => {
      if (num === 0) {
        return 1;
      } else if (num < 0 || (typeof num) !== 'number' || Math.abs(num) !== num) {
        return NaN;
      }
      return num * factorial(num - 1);
    };
    break;

  case 'fail1':
    factorial = (num) => {
      if (num === 1) {
        return 1;
      } else if (num < 0 || (typeof num) !== 'number' || Math.abs(num) !== num) {
        return NaN;
      }
      return num * factorial(num - 1);
    };
    break;
  case 'fail2':
    factorial = (num) => {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    };
    break;

  case 'fail3':
    factorial = (num) => {
      if (num === 0) {
        return 1;
      } else if (num < 0 || (typeof num) !== 'number' || Math.abs(num) !== num) {
        return NaN;
      }
      return true;
    };
    break;

  case 'fail4':
    factorial = (num) => {
      if (num === 0) {
        return 1;
      } else if (num < 0 || (typeof num) !== 'number' || Math.abs(num) !== num) {
        return NaN;
      } else if (num > 1) {
        return num;
      }
      return num * factorial(num - 1);
    };
    break;

  case 'fail5':
    factorial = (num) => {
      if (num === 0) {
        return -1;
      } else if (num < 0 || (typeof num) !== 'number' || Math.abs(num) !== num) {
        return NaN;
      }
      return Math.abs(num * factorial(num - 1));
    };
    break;


  default:
    console.log('error');
}

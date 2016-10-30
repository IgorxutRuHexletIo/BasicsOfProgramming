// BEGIN (write your solution here)
const degToRad = (deg) => {
  return deg * Math.PI / 180;
};

export default (a, b, c) => {
  return a * a / 2 * Math.sin(degToRad(b)) * Math.sin(degToRad(c)) / Math.sin(degToRad(180 - b - c));
};
// END

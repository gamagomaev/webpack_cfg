
const summ = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return NaN;
  } else if (x || y) {
    return x + y;
  }
};

module.exports = summ;

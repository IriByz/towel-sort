
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let origMatrix = matrix;
  if (origMatrix === undefined) {
    origMatrix = [];
  }
  for (let i = 0; i < origMatrix.length; i++) {
    if (i % 2 == 1) {
      origMatrix[i] = origMatrix[i].reverse();
    }
  }
  return origMatrix.flat();
}

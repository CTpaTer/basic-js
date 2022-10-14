const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  matrix.forEach((elem, indexElem) => {
    elem.forEach((el, indexEl) => {
      if (indexElem === 0) {
        result = result + el;
      } else {
        result = (matrix[indexElem - 1][indexEl] === 0) ? result : result + el;    
      }
    })
  });
return result;
}

module.exports = {
  getMatrixElementsSum
};

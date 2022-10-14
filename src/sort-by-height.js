const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArray = arr.slice(0)
    .filter(element => element !== -1)
    .sort((a,b) => b-a);

  arr.forEach((element, index) => {
    if (arr[index] !== -1) {
      arr[index] = newArray.pop()
    }
  });

 return arr;
}

module.exports = {
  sortByHeight
};

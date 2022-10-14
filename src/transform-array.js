const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!')

 let result = [];

  arr.forEach((element, index, arr) => {
    if (arr[index - 1] === "--discard-next") {
      result.push([]);
    } else if (element === "--discard-prev") {
      result.pop();
    } else if (arr[index - 1] === "--double-next") {
      result.push(element, element);
    } else if (element === "--double-prev") {
      result.push((result[result.length - 1]) ? (result[result.length - 1]) :[]);
    } else if (element !== "--double-next" && element !== "--discard-next") {
      result.push(element);
    }
  });

  return result.flat(Infinity)
}

module.exports = {
  transform
};

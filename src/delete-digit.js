const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stroke = String(n);
  let result = '';

  for (let i = 0; i < stroke.length; i++) {
    let item = stroke.slice(0, i) + stroke.slice(i + 1, stroke.length);

    if (item > result) {
      result = item;
    }
  }

  return +result;
}

module.exports = {
  deleteDigit
};

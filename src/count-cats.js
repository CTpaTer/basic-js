const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(item) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const ears = '^^';
  let count = 0;
  
  if(!item) return 0;
  for(let i = 0; i < item.length; i++) {
    for(let j = 0; j < item[i].length; j++) {
      if(item[i][j] === ears) {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};

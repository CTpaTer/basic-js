const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  let result = '';
  let arr = members.filter(item => typeof item === 'string')
    .map((word) => word
      .replaceAll(" ", "")
      .toUpperCase())
      .sort();
  arr.forEach(el => {
    result = result + el.slice(0,1);
  });
 return result;

}

module.exports = {
  createDreamTeam
};

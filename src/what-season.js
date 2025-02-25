const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  
  try {
    date.getUTCSeconds()
  } catch { 
    throw new Error('Invalid date!')
  }

  let seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  let month = date.getUTCMonth();

  return seasons[parseInt((month + 1) / 3)];
}

module.exports = {
  getSeason
};

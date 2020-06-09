const uniqueRandomArray = require('unique-random-array');
const finalSpaceCharacters = require('./final-space-characters.json');

const all = () => finalSpaceCharacters;
const random = uniqueRandomArray(finalSpaceCharacters);

module.exports = {
  all,
  random,
};

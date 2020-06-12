import uniqueRandomArray from 'unique-random-array';
import finalSpaceCharacters from './final-space-characters.json';

const all = () => finalSpaceCharacters;
const random = uniqueRandomArray(finalSpaceCharacters);

export { all, random };

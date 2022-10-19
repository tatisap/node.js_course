import { Numbers } from '../types/enums.js';

export default (number: number): boolean => {
  for (let i: number = Numbers.Two; i <= Math.sqrt(number); i++) {
    if (number % i === Numbers.Zero) {
      return false;
    }
  }
  return number > Numbers.One;
};

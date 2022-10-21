import { Numbers } from '../types/enums.js';

export default (number: number): boolean => {
  return !(isNaN(number) || !Number.isInteger(number) || number < Numbers.Zero);
};

import { Numbers } from '../types/enums.js';
import isPrime from './isPrime.js';

const getNextPrime = (previousNumber: number): number => {
  const nextNumber: number = previousNumber + Numbers.One;
  return (isPrime(nextNumber)) ? nextNumber : getNextPrime(nextNumber);
};

export default getNextPrime;

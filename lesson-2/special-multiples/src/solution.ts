import { FIRST_PRIME } from './constants/index.js';
import { Numbers } from './types/enums.js';
import getNextPrime from './utilities/getNextPrime.js';

export function solve(numberOfPrimes: number, maxValue: number): number {
  const primes: number[] = [];
  for (let i: number = Numbers.Zero; i < numberOfPrimes; i++) {
    if (i === Numbers.Zero) {
      primes.push(FIRST_PRIME);
    } else {
      primes.push(getNextPrime(primes[primes.length - Numbers.One]));
    }
  }
  const primeProduct: number = primes.reduce((product: number, nextPrime: number) => product * nextPrime);
  return Math.floor(maxValue / primeProduct);
}

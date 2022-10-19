import { NO_CONTENT, SEPARATOR } from './constants/index.js';
import { Numbers } from './types/enums.js';

export function solve(input: string, size: number): string {
  if (size === Numbers.Zero || input.length < size) {
    return NO_CONTENT;
  }
  const arrayOfChars: string[] = input.split(SEPARATOR);
  const chunk: string[] = arrayOfChars.splice(Numbers.Zero, size);
  const sumOfCubes: number = chunk
    .map(Number)
    .reduce((sum: number, next: number): number => sum + Math.pow(next, Numbers.Three), Numbers.Zero);

  let result = NO_CONTENT;
  if (sumOfCubes % Numbers.Two) {
    result += chunk.splice(Numbers.One).join(SEPARATOR) + chunk[Numbers.Zero];
  } else {
    result += chunk.reverse().join(SEPARATOR);
  }

  if (arrayOfChars.length > size) {
    result += solve(arrayOfChars.join(SEPARATOR), size);
  }

  return result;
}

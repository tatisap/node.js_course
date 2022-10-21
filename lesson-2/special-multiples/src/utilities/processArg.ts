import { ARG_SEPARATOR, MESSAGES, NO_CONTENT } from '../constants/index.js';
import { Numbers } from '../types/enums.js';
import exitWithError from './exitWithError.js';
import isNaturalNumber from './isNaturalNumber.js';

export default (args: string[], name: string): number => {
  const arg: string[] = args.filter((arg: string): boolean => arg.startsWith(name));
  if (arg.length > Numbers.One) {
    exitWithError(MESSAGES.sameNameArgs);
  }
  if (arg.length === Numbers.Zero) {
    exitWithError(`${MESSAGES.noSuchArg} "${name.slice(Numbers.Two)}"`);
  }
  const argValue: number = Number(arg[Numbers.Zero].replace(name + ARG_SEPARATOR, NO_CONTENT));
  if (!isNaturalNumber(argValue)) {
    exitWithError(MESSAGES.wrongType);
  }
  return argValue;
};

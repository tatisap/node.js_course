import { ARGS_NAMES, MESSAGES, REQUIRED_NUMBER_OF_ARGS } from './constants/index.js';
import { solve } from './solution.js';
import { ExitCode, Numbers } from './types/enums.js';
import processArg from './utilities/processArg.js';

const args: string[] = process.argv.slice(Numbers.Two);

if (args.length < REQUIRED_NUMBER_OF_ARGS) {
  process.stderr.write(MESSAGES.notEnoughArgs);
  process.exit(ExitCode.Fail);
}

const numberOfPrimes: number = processArg(args, ARGS_NAMES.numberOfPrimes);
const maxValue: number = processArg(args, ARGS_NAMES.maxValue);

process.stdout.write(`The result is ${solve(numberOfPrimes, maxValue)}`);

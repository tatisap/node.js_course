import { Command } from 'commander';
import { MESSAGES } from './constants/index.js';
import { revrot } from './solution.js';
import exitWithError from './utilities/exitWithError.js';
import isNaturalNumber from './utilities/isNaturalNumber.js';

const program = new Command();

program
  .name('reverse-or-rotate')
  .description('The program is based on solution of Codwars task "Reverse or rotate?')
  .version('1.0.0', '-v, --version')
  .requiredOption('-s, --string <digits>', 'String of digits', Number)
  .requiredOption('-sz, --size <natural number>', 'Size of chunks', Number)
  .parse(process.argv);

const { string: stringOfDigits, size } = program.opts();

if (!isNaturalNumber(stringOfDigits)) {
  exitWithError(MESSAGES.wrongStringOfDigitsArgType);
}

if (!isNaturalNumber(size)) {
  exitWithError(MESSAGES.wrongSizeArgType);
}

process.stdout.write(revrot(`${stringOfDigits}`, size));

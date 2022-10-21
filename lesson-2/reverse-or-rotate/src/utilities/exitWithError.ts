import { ExitCode } from '../types/enums.js';

export default (errorMessage: string): never => {
  process.stderr.write(errorMessage);
  process.exit(ExitCode.Fail);
};

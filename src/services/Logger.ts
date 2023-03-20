import pino, { Logger } from 'pino';
import pretty from 'pino-pretty';
import * as process from 'process';

let logger: Logger<pretty.PrettyStream>;

const useLogger = () => {
  if (!logger) {
    logger = pino(
      pretty({ singleLine: true }),
    );
  }
  if (process.env.NODE_ENV !== 'production') {
    logger.level = 'debug';
  }
  return logger;
};

export { useLogger };
export type { Logger };

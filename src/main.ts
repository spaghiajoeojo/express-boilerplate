import express from 'express';
import pretty from 'pino-pretty';
import pino from 'pino';
import { router as healthRouter } from '@/routes/health';
import { router as exampleRouter } from '@/routes/example';
import requestLogger from '@/interceptors/requestLogger';

const app = express();

const logger = pino(
  pretty({ singleLine: true }),
);

const PORT = 8080;

app.disable('x-powered-by');
app.use(requestLogger);
app.use('/n', healthRouter);
app.use('/example', exampleRouter);

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});

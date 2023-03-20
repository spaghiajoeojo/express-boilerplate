import { NextFunction, Request, Response } from 'express';
import { useLogger } from '@/services/Logger';

const logger = useLogger();

export default (req: Request, res: Response, next: NextFunction) => {
  const {
    path, ip, method, protocol,
  } = req;
  res.addListener('finish', () => {
    const timestamp = new Date().toISOString();
    const { statusCode } = res;
    logger.info(`${ip} - [${timestamp}] - ${method} ${path} ${protocol.toUpperCase()} - ${statusCode}`);
  });
  next();
};

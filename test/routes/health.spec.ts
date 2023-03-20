import { NextFunction, Request, Response } from 'express';
import { mock } from 'vitest-mock-extended';
import { livenessCheck, readinessCheck } from '@/routes/health';

describe('Healthcheck endpoints', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;
  beforeEach(() => {
    req = mock<Request>();
    res = mock<Response>();
    next = mock<NextFunction>();
  });

  test('liveness should return UP with status 200', async () => {
    // WHEN
    await livenessCheck(req, res, next);

    // THEN
    expect(res.send).toBeCalledWith({ status: 'UP', check: [] });
  });

  test('readiness should return UP with status 200', async () => {
    // WHEN
    await readinessCheck(req, res, next);

    // THEN
    expect(res.send).toBeCalledWith({ status: 'UP', check: [] });
  });
});

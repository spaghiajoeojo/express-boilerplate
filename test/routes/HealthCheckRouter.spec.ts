import { Request, Response } from 'express';
import { mock } from 'vitest-mock-extended';
import HealthCheckRouter from '@/routes/HealthCheckRouter';

describe('Healthcheck endpoints', () => {
  let req: Request;
  let res: Response;

  let healthCheckRouter;

  beforeEach(() => {
    req = mock<Request>();
    res = mock<Response>();
    healthCheckRouter = new HealthCheckRouter();
  });

  test('liveness should return UP with status 200', async () => {
    // WHEN
    healthCheckRouter.livenessCheck(req, res);

    // THEN
    expect(res.send).toBeCalledWith({ status: 'UP', check: [] });
  });

  test('readiness should return UP with status 200', async () => {
    // WHEN
    healthCheckRouter.readinessCheck(req, res);

    // THEN
    expect(res.send).toBeCalledWith({ status: 'UP', check: [] });
  });
});

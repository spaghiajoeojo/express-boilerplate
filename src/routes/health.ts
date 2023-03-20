import express, { RequestHandler } from 'express';

const router = express.Router();

const livenessCheck : RequestHandler = async (_req, res, next) => {
  try {
    res.send({
      status: 'UP',
      check: [],
    });
  } catch (e) {
    next(e);
  }
};

const readinessCheck : RequestHandler = async (_req, res, next) => {
  try {
    res.send({
      status: 'UP',
      check: [],
    });
  } catch (e) {
    next(e);
  }
};

router.get('/live', livenessCheck);

router.get('/ready', readinessCheck);

export { router, livenessCheck, readinessCheck };

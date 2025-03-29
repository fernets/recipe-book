import type { NextFunction, Request } from 'express';
import type { AnyZodObject } from 'zod';
import type { ApiResponseType } from '../types';
import log from '../utils/logger';
import { sendResponse } from '../utils/responseUtils';

const validateResource =
  (schema: AnyZodObject) => (req: Request, res: ApiResponseType<null>, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        log.error(error.message, 'Error validating resource: ');
      } else {
        log.error(error, 'Something went wrong validating resource: ');
      }

      sendResponse(res, 400, null, 'Bad request');
      return;
    }
  };

export default validateResource;

import { NextFunction, Request } from 'express';
import { ApiResponseType } from '../types';
import { sendResponse } from '../utils/responseUtils';

const jsonParseError = (err: Error, _: Request, res: ApiResponseType<null>, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return sendResponse(res, 400, null, 'Bad request');
  }
  next(err);
};

export default jsonParseError;

import log from './logger';
import type { ApiResponseType } from '../types';
import { sendResponse } from './responseUtils';

export function handleControllerError<T>(
  res: ApiResponseType<T>,
  error: unknown,
  customMessage: string,
) {
  if (error instanceof Error) {
    log.error(error.message, customMessage);
  } else {
    log.error(error, customMessage);
  }

  return sendResponse(res, 500, null, 'Internal server error');
}

export function handleServiceError(error: unknown, customMessage: string): never {
  if (error instanceof Error) {
    log.error(error.message, customMessage);
  } else {
    log.error(error, customMessage);
  }

  throw error;
}

export function handleMiddlewareError(
  res: ApiResponseType<null>,
  error: unknown,
  defaultMessage: string,
) {
  if (error instanceof Error) {
    log.error(error.message, defaultMessage);
    return sendResponse(res, 403, null, 'Forbidden');
  } else {
    log.error(error, `Something went wrong. ${defaultMessage}`);
    return sendResponse(res, 500, null, 'Internal server error');
  }
}

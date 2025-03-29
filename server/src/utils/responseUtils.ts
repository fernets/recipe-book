import type { ApiResponseType } from '../types';

export function sendResponse<T>(
  res: ApiResponseType<T>,
  statusCode: number,
  data: T | null,
  message: string,
) {
  return res.status(statusCode).json({ data, message });
}

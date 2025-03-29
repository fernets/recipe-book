import type { Response } from 'express';

type ApiResponsePayloadType<T> = {
  data: T | null;
  message: string;
};

export type ApiResponseType<T> = Response<ApiResponsePayloadType<T>>;

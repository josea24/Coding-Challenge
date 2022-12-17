import { AxiosResponse } from 'axios';
import { catchError, map, Observable, pipe, UnaryFunction } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export const axiosResponseTransformPipe = <T>(): UnaryFunction<
  Observable<AxiosResponse<T>>,
  Observable<T>
> =>
  pipe(
    map((response: AxiosResponse<T>) => response?.data),
    catchError((error) => {
      throw new HttpException(
        { message: error?.response?.data?.message || 'Unknown error' },
        error?.response?.data?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }),
  );

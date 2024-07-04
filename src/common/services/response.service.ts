import { Injectable } from '@nestjs/common';
import { ResponseFormat } from '../insterfaces/response.interface';

@Injectable()
export class ResponseService {
  format<T>(data: T, message = 'Request successful'): ResponseFormat<T> {
    return {
      success: true,
      message,
      data,
    };
  }

  error(message: string): ResponseFormat<null> {
    return {
      success: false,
      message,
      data: null,
    };
  }
}

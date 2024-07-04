export interface ResponseFormat<T> {
  success: boolean;
  message: string;
  data: T;
}

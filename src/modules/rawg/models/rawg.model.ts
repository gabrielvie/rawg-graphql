import { AxiosRequestConfig } from 'axios';

export type RAWGServiceRequestInfo = {
  url: string;
  config: AxiosRequestConfig;
};

export class RAWGServiceResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: [T];
}

// External.
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

// Local.
import { Injectable } from '@nestjs/common';
import { RAWGEndpoint } from './models/rawg.enum';
import { RAWGRequestInfo } from './models/rawg.model';

@Injectable()
export class RAWGHelper {
  private readonly baseURL: string = 'https://api.rawg.io/api';
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('RAWG_API_KEY');
  }

  buildRequestInfo<P>(endpoint: RAWGEndpoint, args: P): RAWGRequestInfo {
    const url: string = `${this.baseURL}/${endpoint}`;
    const config: AxiosRequestConfig = {
      params: {
        key: this.apiKey,
        ...args,
      },
    };

    return {
      url,
      config,
    };
  }
}

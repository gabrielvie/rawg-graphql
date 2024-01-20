// External.
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

// Local.
import { Injectable } from '@nestjs/common';
import { RAWGEndpoint } from './models/rawg.enum';
import { RAWGServiceRequestInfo } from './models/rawg.model';

@Injectable()
export class RAWGHelper {
  private readonly baseURL: string = 'https://api.rawg.io/api';
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('RAWG_API_KEY');
  }

  buildRequestInfo<TArgs>(
    endpoint: RAWGEndpoint,
    args: TArgs,
  ): RAWGServiceRequestInfo {
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

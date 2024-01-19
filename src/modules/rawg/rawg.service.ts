// External.
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

// Local.
import { RAWGEndpoint } from './models/rawg.enum';
import { RAWGHelper } from './rawg.helper';

@Injectable()
export class RAWGService {
  constructor(
    private readonly rawgHelper: RAWGHelper,
    private readonly httpService: HttpService,
  ) {}

  async query<P, T>(endpoint: RAWGEndpoint, args: P): Promise<T> {
    const { url, config } = this.rawgHelper.buildRequestInfo<P>(endpoint, args);

    const { data } = await this.httpService.axiosRef.get(url, config);
    console.info(data);

    return [] as T;
  }
}

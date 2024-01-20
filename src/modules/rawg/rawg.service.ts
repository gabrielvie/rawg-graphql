// External.
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

// Local.
import { RAWGEndpoint } from './models/rawg.enum';
import { RAWGServiceResponse } from './models/rawg.model';
import { RAWGHelper } from './rawg.helper';

@Injectable()
export class RAWGService {
  constructor(
    private readonly rawgHelper: RAWGHelper,
    private readonly httpService: HttpService,
  ) {}

  async query<TArgs, TEntity>(
    endpoint: RAWGEndpoint,
    args: TArgs,
  ): Promise<RAWGServiceResponse<TEntity>> {
    const { url, config } = this.rawgHelper.buildRequestInfo<TArgs>(
      endpoint,
      args,
    );
    const { data } = await this.httpService.axiosRef.get(url, config);

    return data satisfies RAWGServiceResponse<TEntity>;
  }
}

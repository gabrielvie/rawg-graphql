// External.
import { Injectable } from '@nestjs/common';

// Local.
import { RAWGEndpoint } from '../rawg/models/rawg.enum';
import { RAWGService } from '../rawg/rawg.service';
import { GamesArgs } from './dto/games.args';
import { Games } from './models/games.model';

@Injectable()
export class GamesService {
  constructor(private readonly rawgService: RAWGService) {}

  async findAll(gamesArgs: GamesArgs): Promise<Games> {
    return await this.rawgService.query<GamesArgs, Games>(
      RAWGEndpoint.games,
      gamesArgs,
    );
  }
}

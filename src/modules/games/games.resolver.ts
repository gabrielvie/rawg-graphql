// External.
import { Args, Query, Resolver } from '@nestjs/graphql';

// Local.
import { GamesArgs } from './dto/games.args';
import { GamesService } from './games.service';
import { Game } from './models/game.model';
import { Games } from './models/games.model';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => Games)
  async games(@Args() gamesArgs: GamesArgs): Promise<Games> {
    const games = await this.gamesService.findAll(gamesArgs);

    return games;
  }
}

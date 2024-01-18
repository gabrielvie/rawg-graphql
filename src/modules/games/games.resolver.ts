import { Args, Query, Resolver } from '@nestjs/graphql';

import { GamesArgs } from './dto/games.args';
import { Game } from './models/game.model';

@Resolver(() => Game)
export class GamesResolver {
  @Query(() => [Game])
  async games(@Args() gamesArgs: GamesArgs): Promise<Game[]> {
    return [];
  }
}

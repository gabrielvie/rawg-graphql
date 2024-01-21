// External.
import { Injectable } from '@nestjs/common';

// Local.
import { RAWGEndpoint } from '../rawg/models/rawg.enum';
import { RAWGService } from '../rawg/rawg.service';
import { GamesArgs } from './dto/games.args';
import { Game } from './models/game.model';
import { Games } from './models/games.model';

@Injectable()
export class GamesService {
  constructor(private readonly rawgService: RAWGService) {}

  async findAll(gamesArgs: GamesArgs): Promise<Games> {
    const { count, next, previous, results } = await this.rawgService.query<
      GamesArgs,
      Game
    >(RAWGEndpoint.games, gamesArgs);

    const nextPage = this.extractPageNumber(next);
    const previousPage = this.extractPageNumber(previous);

    return {
      count,
      next: nextPage,
      previous: previousPage,
      results,
    };
  }

  private extractPageNumber(urlString: string): number | null {
    let page = null;

    try {
      const url = new URL(urlString);
      const pageParam = url.searchParams.get('page');

      if (pageParam) {
        page = parseInt(pageParam, 10);
      }
    } catch (error) {
      console.error(`Error extracting page number: `, error);
    }

    return page;
  }
}

// External.
import { Module } from '@nestjs/common';

// Local.
import { RAWGModule } from '../rawg/rawg.module';
import { GamesResolver } from './games.resolver';
import { GamesService } from './games.service';

@Module({
  imports: [RAWGModule],
  providers: [GamesResolver, GamesService],
})
export class GamesModule {}

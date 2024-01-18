import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GamesModule } from './modules/games/games.module';
import env from './shared/config/env.config';

@Module({
  imports: [
    GamesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: env.GQL_PLAYGROUND,
    }),
  ],
})
export class AppModule {}

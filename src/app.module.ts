import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import env from './core/config/env.config';
import { GamesModule } from './modules/games/games.module';

@Module({
  imports: [
    GamesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: env.isDev || false,
    }),
  ],
})
export class AppModule {}

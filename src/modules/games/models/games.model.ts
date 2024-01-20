import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Game } from './game.model';

@ObjectType({ description: 'games ' })
export class Games {
  @Field()
  count: number;

  @Field(() => Int, { nullable: true, description: 'Next page' })
  next?: number;

  @Field(() => Int, { nullable: true, description: 'Previous page' })
  previous?: number;

  @Field(() => [Game])
  results: [Game];
}

import { Field, ObjectType } from '@nestjs/graphql';
import { Game } from './game.model';

@ObjectType({ description: 'games ' })
export class Games {
  @Field()
  count: number;

  @Field({ nullable: true })
  next?: string;

  @Field({ nullable: true })
  previous?: string;

  @Field(() => [Game])
  results: [Game];
}

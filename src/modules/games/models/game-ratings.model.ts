import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Game: Ratings ' })
export class GameRatings {
  @Field(() => ID)
  id: number;

  @Field({ description: 'Title' })
  title: string;

  @Field(() => Int, { description: 'Count' })
  count: number;

  @Field(() => Float, { description: 'Percent' })
  percent: number;
}

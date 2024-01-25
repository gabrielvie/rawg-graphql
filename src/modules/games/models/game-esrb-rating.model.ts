import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GameESRBRatingSlug } from './game.enum';

@ObjectType({ description: 'Game: ESRB rating' })
export class GameESRBRating {
  @Field(() => ID)
  id: number;

  @Field(() => GameESRBRatingSlug, { description: 'Slug' })
  slug: GameESRBRatingSlug;

  @Field({ description: 'Name' })
  name: string;
}

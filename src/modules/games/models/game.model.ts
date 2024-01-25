// External.
import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

// Local.
import { GameAddedByStatus } from './game-added-by-status.model';
import { GameESRBRating } from './game-esrb-rating.model';
import { GamePlatform } from './game-platform.model';
import { GameRatings } from './game-ratings.model';

@ObjectType({ description: 'Game ' })
export class Game {
  @Field(() => ID)
  id: number;

  @Field({ description: 'Slug' })
  slug: string;

  @Field({ description: 'Name' })
  name: string;

  @Field(() => Int, { description: 'Playtime (In Hours)' })
  playtime: number;

  @Field({ description: 'Released' })
  released?: string;

  @Field({ description: 'TBA' })
  tba: boolean;

  @Field({ description: 'Background image' })
  background_image: string;

  @Field(() => Float, { description: 'Rating' })
  rating: number;

  @Field(() => Int, { description: 'Rating top' })
  rating_top: number;

  @Field(() => [GameRatings], { description: 'Ratings' })
  ratings: GameRatings[];

  @Field(() => Int, { description: 'Ratings count' })
  ratings_count: number;

  @Field(() => Int, { description: 'Reviews text count' })
  reviews_text_count: number;

  @Field(() => Int, { description: 'Added' })
  added: number;

  @Field(() => GameAddedByStatus, { description: 'Added by status' })
  added_by_status: GameAddedByStatus;

  @Field(() => Int, { description: 'Metacritic' })
  metacritic?: number;

  @Field(() => Int, { description: 'Suggestions count' })
  suggestions_count: number;

  @Field({ description: 'Updated' })
  updated: string;

  @Field(() => GameESRBRating, { description: 'ESRB rating' })
  esrb_rating?: GameESRBRating;

  @Field(() => [GamePlatform], { description: 'Platforms' })
  platforms?: GamePlatform[];
  // TODO: stores: array<object>
}

import {
  Field,
  Float,
  ID,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

@ObjectType({ description: 'Game: Added by status ' })
class AddedByStatus {
  @Field(() => Int, { description: 'Yet' })
  yet: number;

  @Field(() => Int, { description: 'Owned' })
  owned: number;

  @Field(() => Int, { description: 'Beaten' })
  beaten: number;

  @Field(() => Int, { description: 'To play' })
  toplay: number;

  @Field(() => Int, { description: 'Dropped' })
  dropped: number;

  @Field(() => Int, { description: 'Playing' })
  playing: number;
}

enum ESRBRatingSlug {
  everyone = 'everyone',
  everyone_10_plus = 'everyone-10-plus',
  teen = 'teen',
  mature = 'mature',
  adults_only = 'adults-only',
  rating_pending = 'rating-pending',
}

enum ESRBRatingName {
  everyone = 'Everyone',
  everyone_10_plus = 'Everyone 10+',
  teen = 'Teen',
  mature = 'Mature',
  adults_only = 'Adults Only',
  rating_pending = 'Rating Pending',
}

registerEnumType(ESRBRatingSlug, {
  name: 'slug',
  description:
    'Enum: "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"',
});

registerEnumType(ESRBRatingName, {
  name: 'name',
  description:
    'Enum: "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"',
});

@ObjectType({ description: 'Game: Ratings ' })
class Ratings {
  @Field(() => ID)
  id: number;

  @Field({ description: 'Title' })
  title: string;

  @Field(() => Int, { description: 'Count' })
  count: number;

  @Field(() => Float, { description: 'Percent' })
  percent: number;
}

@ObjectType({ description: 'Game: ESRB rating' })
class ESRBRating {
  @Field(() => ID)
  id: number;

  @Field(() => ESRBRatingSlug, { description: 'Slug' })
  slug: ESRBRatingSlug;

  @Field({ description: 'Name' })
  name: string;
}

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

  // TODO: platforms: array<object>
  // TODO: stores: array<object>

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

  @Field(() => [Ratings], { description: 'Ratings' })
  ratings: [Ratings];

  @Field(() => Int, { description: 'Ratings count' })
  ratings_count: number;

  @Field(() => Int, { description: 'Reviews text count' })
  reviews_text_count: number;

  @Field(() => Int, { description: 'Added' })
  added: number;

  @Field(() => AddedByStatus, { description: 'Added by status' })
  added_by_status: AddedByStatus;

  @Field(() => Int, { description: 'Metacritic' })
  metacritic?: number;

  @Field(() => Int, { description: 'Suggestions count' })
  suggestions_count: number;

  @Field({ description: 'Updated' })
  updated: string;

  @Field(() => ESRBRating, { description: 'ESRB rating' })
  esrb_rating?: ESRBRating;
}

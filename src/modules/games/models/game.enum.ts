import { registerEnumType } from '@nestjs/graphql';

export enum GameESRBRatingSlug {
  everyone = 'everyone',
  everyone_10_plus = 'everyone-10-plus',
  teen = 'teen',
  mature = 'mature',
  adults_only = 'adults-only',
  rating_pending = 'rating-pending',
}

export enum GameESRBRatingName {
  everyone = 'Everyone',
  everyone_10_plus = 'Everyone 10+',
  teen = 'Teen',
  mature = 'Mature',
  adults_only = 'Adults Only',
  rating_pending = 'Rating Pending',
}

registerEnumType(GameESRBRatingSlug, {
  name: 'slug',
  description:
    'Enum: "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"',
});

registerEnumType(GameESRBRatingName, {
  name: 'name',
  description:
    'Enum: "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"',
});

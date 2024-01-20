import { ArgsType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsOptional, Min } from 'class-validator';

enum GamesOrdering {
  NAME_ASC = 'name',
  NAME_DESC = '-name',
  RELEASED_ASC = 'released',
  RELEASED_DESC = '-released',
  ADDED_ASC = 'added',
  ADDED_DESC = '-added',
  CREATED_ASC = 'created',
  CREATED_DESC = '-created',
  UPDATED_ASC = 'updated',
  UPDATED_DESC = '-updated',
  RATING_ASC = 'rating',
  RATING_DESC = '-rating',
  METACRITIC_ASC = 'metacritic',
  METACRITIC_DESC = '-metacritic',
}

registerEnumType(GamesOrdering, {
  name: 'string',
  description:
    'Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. \
      You can reverse the sort order adding a hyphen, for example: `-released`.',
});

@ArgsType()
export class GamesArgs {
  @Field(() => Int, {
    defaultValue: 1,
    description: 'A page number within the paginated result set.',
  })
  @IsOptional()
  @Min(1)
  page?: number;

  @Field(() => Int, { description: 'Number of results to return per page.' })
  @IsOptional()
  page_size?: number;

  @Field({ description: 'Search query.' })
  @IsOptional()
  search?: string;

  @Field({
    description: 'Disable fuzziness for the search query.',
  })
  @IsOptional()
  search_precise?: boolean;

  @Field({ description: 'Mark the search query as exact.' })
  @IsOptional()
  search_exact?: boolean;

  @Field({ description: 'Filter by parent platforms, for example: `1,2,3`.' })
  @IsOptional()
  parent_platforms?: string;

  @Field({ description: 'Filter by platforms, for example: `4,5`.' })
  @IsOptional()
  platforms?: string;

  @Field({ description: 'Filter by stores, for example: `5,6`.' })
  @IsOptional()
  stores?: string;

  @Field({
    description:
      'Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive.`',
  })
  @IsOptional()
  developers?: string;

  @Field({
    description:
      'Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.',
  })
  @IsOptional()
  publishers?: string;

  @Field({
    description: 'Filter by genres, for example: `4,51` or `action,indie`.',
  })
  @IsOptional()
  genres?: string;

  @Field({
    description:
      'Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.',
  })
  @IsOptional()
  tags?: string;

  @Field({
    description:
      'Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.',
  })
  @IsOptional()
  creators?: string;

  @Field({
    description:
      'Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.',
  })
  @IsOptional()
  dates?: string;

  @Field({
    description:
      'Filter by an update date, for example: `2020-12-01,2020-12-31`.',
  })
  @IsOptional()
  updated?: string;

  @Field(() => Int, {
    description: 'Filter by platforms count, for example: `1`.',
  })
  @IsOptional()
  platforms_count?: number;

  @Field({
    description: 'Filter by a metacritic rating, for example: `80,100`.',
  })
  @IsOptional()
  metacritic?: string;

  @Field(() => Int, {
    description:
      'Exclude games from a particular collection, for example: `123`.',
  })
  @IsOptional()
  exclude_collection?: number;

  @Field({ description: 'Exclude additions.' })
  @IsOptional()
  exclude_additions?: boolean;

  @Field({ description: 'Exclude games which have additions.' })
  @IsOptional()
  exclude_parents?: boolean;

  @Field({ description: 'Exclude games which are included in a game series.' })
  @IsOptional()
  exclude_game_series?: boolean;

  @Field({ description: 'Exclude stores, for example: `5,6`.' })
  @IsOptional()
  exclude_stores?: string;

  @Field(() => GamesOrdering, {
    description:
      'Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. \
      You can reverse the sort order adding a hyphen, for example: `-released`.',
  })
  @IsOptional()
  @IsEnum(GamesOrdering, { message: 'Invalid sorting option. ' })
  ordering?: GamesOrdering;
}

import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Platform ' })
export class Platform {
  @Field(() => ID)
  id: number;

  @Field({ description: 'Slug' })
  slug: string;

  @Field({ description: 'Name' })
  name: string;

  @Field(() => Int, { description: 'Games count' })
  games_count: number;

  @Field({ description: 'Image background' })
  image_background: string;

  @Field({ description: 'Image' })
  image?: string;

  @Field(() => Int, { description: 'Year start' })
  year_start?: number;

  @Field(() => Int, { description: 'Year end' })
  year_end?: number;
}

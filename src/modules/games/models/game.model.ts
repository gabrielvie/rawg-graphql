import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'game ' })
export class Game {
  @Field(() => ID)
  id: number;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  released?: string;
}

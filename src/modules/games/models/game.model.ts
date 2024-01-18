import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'game ' })
export class Game {
  @Field(() => ID)
  id: string;

  @Directive('@upper')
  title: string;
}

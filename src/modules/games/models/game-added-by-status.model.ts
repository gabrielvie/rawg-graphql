import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Game: Added by status ' })
export class GameAddedByStatus {
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

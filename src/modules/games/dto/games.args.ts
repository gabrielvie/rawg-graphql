import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@ArgsType()
export class GamesArgs {
  @Field(() => Int)
  @Min(1)
  page = 1;
}

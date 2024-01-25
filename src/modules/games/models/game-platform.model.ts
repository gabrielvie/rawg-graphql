import { Field, ObjectType } from '@nestjs/graphql';
import { Platform } from 'src/modules/platforms/models/platform.model';

@ObjectType({ description: 'Game: Platform Requirements' })
export class GamePlatformRequirements {
  @Field({ description: 'Minimum' })
  minimum: string;

  @Field({ description: 'Recommended' })
  recommended: string;
}

@ObjectType({ description: 'Game: Platform' })
export class GamePlatform {
  @Field(() => Platform, { description: 'Platforms' })
  platform: Platform;

  @Field({ description: 'Release at' })
  released_at?: string;

  @Field(() => GamePlatformRequirements, { description: 'Requirements' })
  requirements?: GamePlatformRequirements;
}

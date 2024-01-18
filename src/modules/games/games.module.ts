import { Module } from "@nestjs/common";
import { GamesResolver } from "./games.resolver";

@Module({
  providers: [GamesResolver],
})
export class GamesModule {}

// External.
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Local.
import { RAWGHelper } from './rawg.helper';
import { RAWGService } from './rawg.service';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [RAWGHelper, RAWGService],
  exports: [RAWGService],
})
export class RAWGModule {}

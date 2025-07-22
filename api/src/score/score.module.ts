import { Module } from '@nestjs/common';
import { ScoreController } from './score.controller';
import { ScoreRankingController } from './score-ranking.controller';
import { ScoreUsecase } from './score.usecase';

@Module({
  controllers: [ScoreController, ScoreRankingController],
  providers: [ScoreUsecase],
})
export class ScoreModule {} 
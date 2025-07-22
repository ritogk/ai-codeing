import { Controller, Get, Query } from '@nestjs/common';
import { ScoreUsecase } from './score.usecase';
import { ScoreRankingDto } from './dto/score-ranking.dto';

@Controller('score/ranking')
export class ScoreRankingController {
  constructor(private readonly usecase: ScoreUsecase) {}

  @Get()
  getRanking(@Query('timeLimitSec') timeLimitSec: number, @Query('limit') limit = 10): ScoreRankingDto[] {
    return this.usecase.getRanking(Number(timeLimitSec), Number(limit));
  }
} 
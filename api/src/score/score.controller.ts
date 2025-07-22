import { Body, Controller, Post } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { ScoreUsecase } from './score.usecase';
import { ScoreEntity } from './score.entity';

@Controller('score')
export class ScoreController {
  constructor(private readonly usecase: ScoreUsecase) {}

  @Post()
  createScore(@Body() dto: CreateScoreDto): ScoreEntity {
    return this.usecase.createScore(dto);
  }
} 
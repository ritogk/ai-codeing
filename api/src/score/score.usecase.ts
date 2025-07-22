import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ScoreEntity } from './score.entity';
import { CreateScoreDto } from './dto/create-score.dto';
import { ScoreRankingDto } from './dto/score-ranking.dto';

@Injectable()
export class ScoreUsecase {
  private scores: ScoreEntity[] = [];

  createScore = (dto: CreateScoreDto): ScoreEntity => {
    const entity = new ScoreEntity(
      uuidv4(),
      dto.userName,
      dto.score,
      new Date(),
      dto.timeLimitSec,
    );
    this.scores.push(entity);
    return entity;
  };

  getRanking = (timeLimitSec: number, limit = 10): ScoreRankingDto[] => {
    return this.scores
      .filter((s) => s.timeLimitSec === timeLimitSec)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((s) => ({
        userName: s.userName,
        score: s.score,
        playedAt: s.playedAt,
        timeLimitSec: s.timeLimitSec,
      }));
  };
} 
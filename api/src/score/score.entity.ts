export class ScoreEntity {
  constructor(
    public readonly id: string, // UUID
    public readonly userName: string,
    public readonly score: number,
    public readonly playedAt: Date,
    public readonly timeLimitSec: number,
  ) {}
} 
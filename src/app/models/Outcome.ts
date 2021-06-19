export class Outcome {
  outcomeId: number;
  detail: string;
  amount: number;
  createdAt: Date;
  updateAt: Date;

  constructor(outcomeId: number, detail: string, amount: number,  createdAt: Date,  updateAt: Date) {
    this.outcomeId = outcomeId;
    this.detail = detail;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
}

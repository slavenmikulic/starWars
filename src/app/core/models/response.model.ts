export class Response<Model> {
  count!: number;
  next!: string | null;
  previous!: string | null;

  results!: Model[];

  constructor(data?: Response<Model[]>) {
    Object.assign(this, data);
  }
}

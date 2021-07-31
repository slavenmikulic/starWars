export class QueryParams {
  page?: number;
  search?: string;
  order?: string;

  constructor(init?: Partial<QueryParams>) {
    Object.assign(this, init);
  }
}

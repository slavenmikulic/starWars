export class QueryParams {
  page?: number;
  query?: string;
  orderBy?: string;
  order?: '' | 'asc' | 'desc';

  constructor(init?: Partial<QueryParams>) {
    Object.assign(this, init);
  }
}

import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { QueryParams } from "../models/query-params.model";

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  updateQueryParams(params: QueryParams): void {
    const queryParams = this.prepareParams(params);
    this.router.navigate(['./'], { relativeTo: this.activatedRoute, queryParams });
  }

  getQueryParams(): QueryParams {
    const data = this.activatedRoute.snapshot.queryParams;

    let page = Number.parseInt(data.page, 10);
    if (isNaN(page)) {
      page = 1;
    }

    return new QueryParams({
      query: data.query ?? '',
      order: data.order ?? '',
      page: page,
      orderBy: data.orderBy ?? ''
    });
  }

  protected prepareParams(queryParams: QueryParams): QueryParams {
    let params: QueryParams = {};
    if (queryParams.query) {
      params.query = queryParams.query;
    }

    if (queryParams.page) {
      params.page = queryParams.page;
    }

    if (queryParams.orderBy) {
      params.orderBy = queryParams.orderBy;
    }

    if (queryParams.order) {
      params.order = queryParams.order;
    }

    return params;
  }
}

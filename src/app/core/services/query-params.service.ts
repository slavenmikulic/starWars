import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QueryParams } from "../models/query-params.model";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {
  queryParams: BehaviorSubject<QueryParams>;

  constructor(public activatedRoute: ActivatedRoute) {
    this.queryParams = new BehaviorSubject<QueryParams>(this.updateQueryParamsFromRoute())
  }

  updateQueryParams(params: QueryParams): void {
    this.setQueryParams(params);
  }

  getQueryParams(): Observable<QueryParams> {
    return this.queryParams.pipe(
      map(params => this.prepareParams(params)),
      distinctUntilChanged()
    );
  }

  setQueryParams(params: QueryParams): void {
    this.queryParams.next(this.prepareParams(params));
  }

  updateQueryParamsFromRoute(): QueryParams {
    const data = this.activatedRoute.snapshot.queryParams;

    let page = Number.parseInt(data.page, 10);
    if (isNaN(page)) {
      page = 1;
    }

    return new QueryParams({
      search: data.search || '',
      order: data.order || '',
      page: page,
    });
  }

  prepareParams(queryParams: QueryParams): QueryParams {
    let params: QueryParams;
    params = this.setSearchOrPage(queryParams);

    if (queryParams.order) {
      params.order = queryParams.order;
    }

    return params;
  }

  // If search is initiated, set page on 1
  protected setSearchOrPage(queryParams: QueryParams): QueryParams {
    if (queryParams.search) {
      return {
        search: queryParams.search,
        page: 1
      };
    }

    if (queryParams.page) {
      return {
        page: queryParams.page,
        search: ''
      };
    }

    return {
      page: 1,
      search: ''
    };
  }
}

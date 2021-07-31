import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from "../../services/people.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Subject } from "rxjs";
import { People } from "../../models/people.model";
import { Response } from "../../../../core/models/response.model";
import { QueryParams } from "../../../../core/models/query-params.model";
import { QueryParamsService } from "../../../../core/services/query-params.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  items!: People[];

  destroy$ = new Subject<void>();
  params: QueryParams = {
    page: 1,
    query: '',
    orderBy: '',
    order: ''
  }

  constructor(private peopleService: PeopleService,
              private queryParamsService: QueryParamsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.params = this.getRouteParams();
    this.getList(this.params);
  }

  private getList(params: QueryParams): void {
    this.peopleService.list(params).subscribe((response: Response<People>) => {
      this.items = response.results;

      this.paginator.pageSize = 10;
      this.paginator.length = 83;
      this.paginator.pageIndex = this.params.page ? this.params.page - 1 : 0;
      this.cd.detectChanges();
    });
  }

  onChangePagination(pageEvent: PageEvent) {
    this.params.page = pageEvent.pageIndex + 1;
    this.updateRouteParams(this.params);
    this.getList(this.params);
  }

  private updateRouteParams(params: QueryParams) {
    this.queryParamsService.updateQueryParams(params);
  }

  private getRouteParams(): QueryParams {
    return this.queryParamsService.getQueryParams();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

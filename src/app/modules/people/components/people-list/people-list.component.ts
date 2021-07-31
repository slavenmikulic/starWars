import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from "../../services/people.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { People } from "../../models/people.model";
import { Response } from "../../../../core/models/response.model";
import { QueryParams } from "../../../../core/models/query-params.model";
import { QueryParamsService } from "../../../../core/services/query-params.service";
import { BehaviorSubject, of, Subject } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
import { Semaphores } from "../../../../core/components/semaphores/models/semaphores.model";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  items!: People[];

  params: QueryParams = {
    page: 1,
    search: '',
    order: ''
  };

  semaphores$ = new BehaviorSubject<Semaphores>({
    loading: false,
    noData: false,
    error: false,
    success: false
  });

  destroy$ = new Subject();

  constructor(private peopleService: PeopleService,
              private queryParamsService: QueryParamsService) {
  }

  ngOnInit(): void {
    this.listenForQueryParams();
  }

  onChangePagination(pageEvent: PageEvent): void {
    this.params.page = pageEvent.pageIndex + 1;
    this.updateQueryParams(this.params);
  }

  onSearch(value: string): void {
    this.params.search = value;
    this.updateQueryParams(this.params);
  }

  onOrder(value: string): void {
    this.params.order = value;
    this.updateQueryParams(this.params);
  }

  private getList(params: QueryParams): void {
    this.semaphores$.next({ loading: true });

    this.peopleService.list(params)
      .pipe(
        catchError(response => {
          this.semaphores$.next({ error: true });
          return of(response);
        }),
        map((response: Response<People>) => {
          if (this.params.order) {
            response.results = this.orderItems(response.results, this.params.order);
          }

          return response;
        }))
      .subscribe((response: Response<People>) => {
        this.items = response.results;

        this.paginator.length = response.count;
        this.paginator.pageIndex = this.params.page ? this.params.page - 1 : 0;

        if (response.count === 0) {
          this.semaphores$.next({ noData: true });
        } else {
          this.semaphores$.next({ success: true });
        }
      });
  }

  private updateQueryParams(params: QueryParams): void {
    this.queryParamsService.updateQueryParams(params);
  }

  private listenForQueryParams(): void {
    this.queryParamsService.getQueryParams()
      .pipe(takeUntil(this.destroy$))
      .subscribe(queryParams => {
        this.params = queryParams;
        this.getList(this.params);
      });
  }

  private orderItems(items: People[], order: string): People[] {
    const sortedItem = [...items];
    if (order === 'name') {
      sortedItem.sort(this.compareByName);
    }

    if (order === 'birth_year') {
      sortedItem.sort(this.compareByBirthDay);
    }

    return sortedItem;
  }

  private compareByName = (a: People, b: People): number => {
    return a.name?.localeCompare(b.name ?? '') ?? 0;
  }

  private compareByBirthDay = (a: People, b: People): number => {
    return a.birth_year?.localeCompare(b.birth_year ?? '') ?? 0;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

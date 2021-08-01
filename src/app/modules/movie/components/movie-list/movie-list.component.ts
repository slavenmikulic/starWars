import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { People } from "../../../people/models/people.model";
import { QueryParams } from "../../../../core/models/query-params.model";
import { BehaviorSubject, Subject } from "rxjs";
import { Semaphores } from "../../../../core/components/semaphores/models/semaphores.model";
import { QueryParamsService } from "../../../../core/services/query-params.service";
import { takeUntil } from "rxjs/operators";
import { Response } from "../../../../core/models/response.model";
import { Movie } from "../../models/movie.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  items!: Movie[];

  params: QueryParams = {
    page: 1,
    search: '',
    order: ''
  };

  semaphores$!: BehaviorSubject<Semaphores>;

  destroy$ = new Subject();

  constructor(private movieService: MovieService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private queryParamsService: QueryParamsService) {
  }

  ngOnInit(): void {
    this.listenForQueryParams();
    this.semaphores$ = this.movieService.semaphores$;
  }

  onChangePagination(pageEvent: PageEvent): void {
    this.params.page = pageEvent.pageIndex + 1;
    this.updateQueryParams(this.params);
  }

  onSearch(value: string): void {
    this.params.search = value;
    this.updateQueryParams(this.params);
  }

  private getList(params: QueryParams): void {
    this.movieService.list(params)
      .subscribe((response: Response<People>) => {
        this.items = response.results;

        this.paginator.length = response.count;
        this.paginator.pageIndex = this.params.page ? this.params.page - 1 : 0;
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

        this.router.navigate(['./'], {
          relativeTo: this.activatedRoute,
          queryParams: queryParams,
          queryParamsHandling: 'merge'
        });
      });
  }
}

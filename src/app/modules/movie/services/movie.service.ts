import { Injectable } from "@angular/core";
import { ResponseService } from "../../../core/services/response.service";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie.model";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class MovieService extends ResponseService<Movie> {
  url = environment.baseUrl + '/films';

  constructor(protected http: HttpClient) {
    super();
  }

  getListOfMoviesFromListIds(ids: number[]) {
    const movies$: Observable<Movie>[] = [];
    for (let id of ids) {
      movies$.push(this.getById(id).pipe(map(item => {
        item.id = id;
        return item;
      })));
    }

    return forkJoin(movies$);
  }
}

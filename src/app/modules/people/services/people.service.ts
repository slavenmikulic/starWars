import { Injectable } from "@angular/core";
import { ResponseService } from "../../../core/services/response.service";
import { People } from "../models/people.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class PeopleService extends ResponseService<People> {
  protected url = environment.baseUrl + '/people';

  constructor(protected http: HttpClient) {
    super();
  }

  getListOfCharactersFromListIds(ids: number[]): Observable<People[]> {
    const characters$: Observable<People>[] = [];
    for (let id of ids) {
      characters$.push(this.getById(id).pipe(map(item => {
        item.id = id;
        return item;
      })));
    }

    return forkJoin(characters$);
  }
}

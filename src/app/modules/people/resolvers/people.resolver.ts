import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { People } from "../models/people.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { PeopleService } from "../services/people.service";

@Injectable()
export class PeopleResolver implements Resolve<People> {
  constructor(private peopleService: PeopleService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<People> | Promise<People> | People {
    const id = Number.parseInt(route.paramMap.get('id') ?? '', 10);
    if (!id && isNaN(id)) {
      throw 'Id not found';
    }

    return this.peopleService.getById(id);
  }
}

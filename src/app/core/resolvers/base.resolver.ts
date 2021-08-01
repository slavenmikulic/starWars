import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ResponseService } from "../services/response.service";

export class BaseResolver<T> implements Resolve<T> {

  constructor(protected service: ResponseService<T>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
    const id = Number.parseInt(route.paramMap.get('id') ?? '', 10);
    if (!id && isNaN(id)) {
      throw 'Id not found';
    }

    return this.service.getById(id);
  }
}

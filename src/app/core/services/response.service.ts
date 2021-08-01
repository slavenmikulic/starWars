import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Response } from "../models/response.model";
import { Semaphores } from "../components/semaphores/models/semaphores.model";
import { catchError, tap } from "rxjs/operators";

export abstract class ResponseService<Model> {
  protected abstract url: string;
  protected abstract http: HttpClient;
  public semaphores$ = new BehaviorSubject<Semaphores>({
    loading: false,
    noData: false,
    error: false,
    success: false
  });

  list(data?: any): Observable<Response<Model>> {
    const params = this.prepareParams(data);
    this.semaphores$.next({ loading: true });

    return this.http.get<Response<Model>>(this.url, { params }).pipe(
      catchError(response => {
        this.semaphores$.next({ error: true });
        return of(response);
      }),
      tap((response: Response<Model>) => {
        if (response.count === 0) {
          this.semaphores$.next({ noData: true });
        } else {
          this.semaphores$.next({ success: true });
        }
      })
    );
  }

  getById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`);
  }

  protected prepareParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (let key in params) {
      if (!(params.hasOwnProperty(key) && params[key])) {
        continue;
      }

      httpParams = httpParams.append(key, params[key]);
    }

    return httpParams;
  }
}

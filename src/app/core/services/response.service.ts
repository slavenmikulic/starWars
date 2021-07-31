import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "../models/response.model";

export abstract class ResponseService<Model> {
  protected abstract url: string
  protected abstract http: HttpClient

  list(data?: any): Observable<Response<Model[]>> {
    const params = this.prepareParams(data);
    return this.http.get<Response<Model[]>>(this.url, { params });
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
import { Injectable } from "@angular/core";
import { ResponseService } from "../../../core/services/response.service";
import { People } from "../models/people.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class PeopleService extends ResponseService<People> {
  protected url = environment.baseUrl + '/people';

  constructor(protected http: HttpClient) {
    super();
  }
}

import { Injectable } from "@angular/core";
import { ResponseListService } from "../../../core/services/response-list.service";
import { People } from "../models/people.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class PeopleService extends ResponseListService<People> {
  protected url = environment.baseUrl + '/people';

  constructor(protected http: HttpClient) {
    super();
  }
}

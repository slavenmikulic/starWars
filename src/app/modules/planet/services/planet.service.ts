import { Injectable } from "@angular/core";
import { ResponseService } from "../../../core/services/response.service";
import { Planet } from "../models/planet.model";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlanetService extends ResponseService<Planet> {
  url = environment.baseUrl + '/planets';

  constructor(protected http: HttpClient) {
    super();
  }
}

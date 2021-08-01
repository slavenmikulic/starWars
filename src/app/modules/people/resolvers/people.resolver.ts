import { People } from "../models/people.model";
import { Injectable } from "@angular/core";
import { PeopleService } from "../services/people.service";
import { BaseResolver } from "../../../core/resolvers/base.resolver";

@Injectable()
export class PeopleResolver extends BaseResolver<People> {
  constructor(protected service: PeopleService) {
    super(service);
  }
}

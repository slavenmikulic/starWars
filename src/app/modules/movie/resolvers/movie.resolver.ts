import { Injectable } from "@angular/core";
import { BaseResolver } from "../../../core/resolvers/base.resolver";
import { Movie } from "../models/movie.model";
import { MovieService } from "../services/movie.service";

@Injectable()
export class MovieResolver extends BaseResolver<Movie> {
  constructor(protected service: MovieService) {
    super(service);
  }
}

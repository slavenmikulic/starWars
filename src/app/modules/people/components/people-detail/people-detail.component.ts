import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { People } from "../../models/people.model";
import { PlanetService } from "../../../planet/services/planet.service";
import { Planet } from "../../../planet/models/planet.model";
import { Observable } from "rxjs";
import { IdParserService } from "../../../../core/services/id-parser.service";
import { Movie } from "../../../movie/models/movie.model";
import { MovieService } from "../../../movie/services/movie.service";

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleDetailComponent implements OnInit {
  item!: People;
  homeworld?: Observable<Planet>;
  films?: Observable<Movie[]>;

  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data.item;
    this.getListOfMovies();
    this.getHomeworld();
  }

  getHomeworld(): void {
    const homeworldId = IdParserService.parseId(this.item.homeworld ?? '');
    if (homeworldId) {
      this.homeworld = this.planetService.getById(homeworldId);
    }
  }

  getListOfMovies() {
    const ids = this.item.films?.map(IdParserService.parseId).filter(id => id != null);
    if (ids?.length) {
      this.films = this.movieService.getListOfMoviesFromListIds(ids as number[]);
    }
  }
}

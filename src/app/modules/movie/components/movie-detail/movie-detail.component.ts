import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../models/movie.model";
import { Observable } from "rxjs";
import { People } from "../../../people/models/people.model";
import { PeopleService } from "../../../people/services/people.service";
import { IdParserService } from "../../../../core/services/id-parser.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  item!: Movie;
  characters$?: Observable<People[]>;

  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data.item;
    this.getListOfCharacters();
  }


  getListOfCharacters() {
    const ids = this.item.characters?.map(IdParserService.parseId).filter(id => id != null);
    if (ids?.length) {
      this.characters$ = this.peopleService.getListOfCharactersFromListIds(ids as number[]);
    }
  }

}

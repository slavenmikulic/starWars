import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { People } from "../../../models/people.model";
import { IdParserService } from "../../../../../core/services/id-parser.service";
import { PeopleFavoriteService } from "../../../services/people-favorite.service";
import { ReplaySubject } from "rxjs";

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListItemComponent implements OnInit {
  @Input() item!: People;

  itemId!: number | null;
  isFavorite$ = new ReplaySubject<boolean>();

  constructor(private peopleFavoriteService: PeopleFavoriteService) {
  }

  ngOnInit(): void {
    this.setId();
    this.setIsFavorite();
  }

  setId(): void {
    this.itemId = IdParserService.parseId(this.item.url ?? '');
  }

  setIsFavorite(): void {
    if (this.itemId) {
      this.isFavorite$.next(this.peopleFavoriteService.getFavoriteById(this.itemId) != undefined);
    }
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PeopleFavoriteService } from "../../services/people-favorite.service";
import { ReplaySubject } from "rxjs";

@Component({
  selector: 'app-people-favorite',
  templateUrl: './people-favorite.component.html',
  styleUrls: ['./people-favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleFavoriteComponent implements OnInit {
  @Input() isFavorite$!: ReplaySubject<boolean>;
  @Input() itemId!: number;

  constructor(private peopleFavoriteService: PeopleFavoriteService) {
  }

  ngOnInit(): void {
  }

  setFavorite(): void {
    if (this.itemId) {
      this.peopleFavoriteService.setFavorite(this.itemId);
      this.isFavorite$.next(true);
    }
  }

  removeFavorite(): void {
    if (this.itemId) {
      this.peopleFavoriteService.removeFavorite(this.itemId);
      this.isFavorite$.next(false);
    }
  }

}

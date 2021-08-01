import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../../models/movie.model";
import { IdParserService } from "../../../../../core/services/id-parser.service";

@Component({
  selector: 'app-move-list-item',
  templateUrl: './move-list-item.component.html',
  styleUrls: ['./move-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveListItemComponent implements OnInit {
  @Input() item!: Movie;

  itemId!: number | null;

  constructor() {
  }

  ngOnInit(): void {
    this.setId();
  }

  setId(): void {
    this.itemId = IdParserService.parseId(this.item.url ?? '');
  }


}

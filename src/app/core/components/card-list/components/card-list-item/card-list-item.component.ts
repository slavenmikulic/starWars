import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from "rxjs";

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListItemComponent implements OnInit {
  @Input() isFavorite$?: ReplaySubject<boolean>;

  constructor() {
  }

  ngOnInit(): void {
  }

}

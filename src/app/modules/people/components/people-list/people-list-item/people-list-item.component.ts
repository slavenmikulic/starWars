import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { People } from "../../../models/people.model";
import { IdParserService } from "../../../../../core/services/id-parser.service";

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListItemComponent implements OnInit {
  @Input() item!: People;

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

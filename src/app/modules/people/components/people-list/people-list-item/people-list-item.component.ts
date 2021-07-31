import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { People } from "../../../models/people.model";

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListItemComponent implements OnInit {
  @Input() item!: People;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { Semaphores } from "../../../semaphores/models/semaphores.model";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {
  @Input() semaphores$!: Subject<Semaphores>;

  constructor() {
  }

  ngOnInit(): void {
  }

}

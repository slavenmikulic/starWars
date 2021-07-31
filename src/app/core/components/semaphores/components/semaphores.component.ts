import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-semaphores',
  templateUrl: './semaphores.component.html',
  styleUrls: ['./semaphores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SemaphoresComponent {
  @Input() semaphores$!: Subject<{ loading?: boolean, noData?: boolean, error?: boolean }>;

  constructor() {
  }

}

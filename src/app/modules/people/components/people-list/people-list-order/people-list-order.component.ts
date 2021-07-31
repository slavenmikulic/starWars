import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-people-list-order',
  templateUrl: './people-list-order.component.html',
  styleUrls: ['./people-list-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListOrderComponent implements OnInit {
  @Output() orderChanged = new EventEmitter<string>();
  form!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.prepareForm();
    this.listenForChange();
  }

  prepareForm(): void {
    const order = this.activatedRoute.snapshot.queryParams?.order;
    this.form = new FormGroup({
      order: new FormControl(order ?? '')
    });
  }

  listenForChange(): void {
    this.order?.valueChanges.subscribe(value => {
      this.orderChanged.emit(value);
    });
  }

  get order(): AbstractControl | null {
    return this.form.get('order');
  }
}

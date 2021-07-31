import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() filterChange = new EventEmitter<string>();

  form!: FormGroup;

  destroy$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.prepareForm();
    this.listenForChanges();
  }

  prepareForm(): void {
    const search = this.activatedRoute.snapshot.queryParams.search;
    this.form = new FormGroup({
      search: new FormControl(search ?? '')
    });
  }

  listenForChanges(): void {
    this.search?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => this.filterChange.emit(value));
  }

  get search(): AbstractControl | null {
    return this.form.get('search');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

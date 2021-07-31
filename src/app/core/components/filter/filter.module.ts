import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "./components/filter.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule {
}

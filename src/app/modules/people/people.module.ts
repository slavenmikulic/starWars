import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/core.module";
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleService } from "./services/people.service";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleListItemComponent } from './components/people-list/people-list-item/people-list-item.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SemaphoresModule } from "../../core/components/semaphores/semaphores.module";
import { FilterModule } from "../../core/components/filter/filter.module";
import { MatSelectModule } from "@angular/material/select";
import { PeopleListOrderComponent } from './components/people-list/people-list-order/people-list-order.component';


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent,
    PeopleListOrderComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    PeopleRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SemaphoresModule,
    FilterModule,
    MatSelectModule,
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule {
}

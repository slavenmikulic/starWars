import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/core.module";
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleService } from "./services/people.service";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleListItemComponent } from './components/people-list/people-list-item/people-list-item.component';


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PeopleRoutingModule,
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule {
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleListComponent } from "./components/people-list/people-list.component";
import { PeopleDetailComponent } from "./components/people-detail/people-detail.component";
import { PeopleResolver } from "./resolvers/people.resolver";

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: ':id',
    component: PeopleDetailComponent,
    resolve: {
      item: PeopleResolver
    }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleRoutingModule {
}

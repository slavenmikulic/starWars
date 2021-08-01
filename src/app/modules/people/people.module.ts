import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/core.module";
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleService } from "./services/people.service";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleListItemComponent } from './components/people-list/people-list-item/people-list-item.component';
import { PeopleListOrderComponent } from './components/people-list/people-list-order/people-list-order.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PeopleResolver } from "./resolvers/people.resolver";
import { PlanetService } from "../planet/services/planet.service";
import { MovieService } from "../movie/services/movie.service";
import { PeopleFavoriteService } from "./services/people-favorite.service";
import { PeopleFavoriteComponent } from './components/people-favorite/people-favorite.component';
import { QueryParamsService } from "../../core/services/query-params.service";


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent,
    PeopleListOrderComponent,
    PeopleDetailComponent,
    PeopleFavoriteComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    PeopleRoutingModule,
  ],
  providers: [
    PeopleService,
    PeopleResolver,
    PlanetService,
    MovieService,
    PeopleFavoriteService,
    QueryParamsService
  ]
})
export class PeopleModule {
}

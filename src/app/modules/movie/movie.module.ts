import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MoveRoutingModule } from "./move-routing.module";
import { MovieService } from "./services/movie.service";
import { QueryParamsService } from "../../core/services/query-params.service";
import { MoveListItemComponent } from './components/movie-list/move-list-item/move-list-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieResolver } from "./resolvers/movie.resolver";
import { PeopleService } from "../people/services/people.service";
import { CoreModule } from "../../core/core.module";


@NgModule({
  declarations: [
    MovieListComponent,
    MoveListItemComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MoveRoutingModule,
    CoreModule,
  ],
  providers: [
    MovieService,
    QueryParamsService,
    MovieResolver,
    PeopleService
  ]
})
export class MovieModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { CardListModule } from "../../core/components/card-list/card-list.module";
import { MoveRoutingModule } from "./move-routing.module";
import { MovieService } from "./services/movie.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FilterModule } from "../../core/components/filter/filter.module";
import { MatDividerModule } from "@angular/material/divider";
import { FlexModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MoveRoutingModule,
    CardListModule,
    MatPaginatorModule,
    FilterModule,
    MatDividerModule,
    FlexModule
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {
}

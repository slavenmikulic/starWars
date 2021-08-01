import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { MovieResolver } from "./resolvers/movie.resolver";

const routes: Routes = [
  {
    component: MovieListComponent,
    path: ''
  },
  {
    component: MovieDetailComponent,
    path: ':id',
    resolve: {
      item: MovieResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveRoutingModule {
}

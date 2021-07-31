import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

const routes: Routes = [
  {
    component: MovieListComponent,
    path: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveRoutingModule {
}

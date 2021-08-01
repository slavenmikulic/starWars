import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/people'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

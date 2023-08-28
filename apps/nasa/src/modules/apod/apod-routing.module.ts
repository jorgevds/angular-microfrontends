import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodDetailComponent } from './containers/apod-detail/apod-detail.component';
import { APODComponent } from './containers/apod/apod.component';

const routes: Routes = [
  {
    path: '',
    component: APODComponent,
  },
  { path: 'detail/:id', component: ApodDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodRoutingModule {}

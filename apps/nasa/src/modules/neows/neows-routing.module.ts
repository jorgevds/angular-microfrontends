import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoDetailComponent } from './containers/neo-detail/neo-detail.component';
import { NeowsComponent } from './containers/neows/neows.component';

const routes: Routes = [
  {
    path: '',
    component: NeowsComponent,
  },
  { path: 'detail/:id', component: NeoDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeowsRoutingModule {}

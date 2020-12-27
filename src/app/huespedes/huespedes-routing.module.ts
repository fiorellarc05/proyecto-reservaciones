import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuespedesPage } from './huespedes.page';

const routes: Routes = [
  {
    path: '',
    component: HuespedesPage
  },
  {
    path: 'detail/:propiedadId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuespedesPageRoutingModule {}

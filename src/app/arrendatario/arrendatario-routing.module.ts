import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrendatarioPage } from './arrendatario.page';

const routes: Routes = [
  {
    path: '',
    component: ArrendatarioPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./delete/delete.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrendatarioPageRoutingModule {}

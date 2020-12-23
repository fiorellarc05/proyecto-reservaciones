import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropiedadesPage } from './propiedades.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadesPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit/:propiedadId',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'detail/:propiedadId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadesPageRoutingModule {}

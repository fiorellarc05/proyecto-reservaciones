import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PropiedadesPageRoutingModule } from './propiedades-routing.module';
import { PropiedadesPage } from './propiedades.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PropiedadesPageRoutingModule
  ],
  declarations: [PropiedadesPage]
})
export class PropiedadesPageModule {}

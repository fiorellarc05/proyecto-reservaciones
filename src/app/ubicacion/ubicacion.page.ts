import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  puntarenas() {
    this.navCtrl.navigateRoot("/propiedades/detail/1");
  }
  guanacaste() {
    this.navCtrl.navigateRoot("/propiedades/detail/2");
  }
  limon() {
    this.navCtrl.navigateRoot("/propiedades/detail/3");
  }
}

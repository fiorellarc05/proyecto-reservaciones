import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  place() {
    this.navCtrl.navigateRoot("/ubicacion");
  }
  pets() {
    this.navCtrl.navigateRoot("/propiedades/detail/3");
  }
  people() {
    this.navCtrl.navigateRoot("/propiedades/detail/2");
  }
  people2() {
    this.navCtrl.navigateRoot("/propiedades/detail/1");
  }
  
}

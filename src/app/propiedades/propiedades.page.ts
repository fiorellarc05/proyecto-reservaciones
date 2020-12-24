import { Component, Input, OnInit  } from '@angular/core';
import { propiedadesService } from './propiedades.service';
import { properties } from './propiedades.model';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {
  properties: properties[];
  
  constructor(
    public navCtrl: NavController,
    private propiedadesServices: propiedadesService,
    private router: Router) 
    { }

  ngOnInit() {
    this.properties = this.propiedadesServices.getAll();
  }

  ionViewWillEnter() {
    this.properties = this.propiedadesServices.getAll();
  }

   //update a property
   update(code: number) {
    this.router.navigate(["/propiedades/edit/" + code]);
  }

  //property details
  viewDetails(code: number) {
    this.router.navigate(["/propiedades/detail/" + code]);
  }

  //route to search a property by filter
  buscar() {
    this.navCtrl.navigateRoot("/buscar");
  }
}


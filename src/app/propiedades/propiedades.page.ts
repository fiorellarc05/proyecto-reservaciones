import { Component, Input, OnInit  } from '@angular/core';
import { propiedadesService } from './propiedades.service';
import { properties } from './propiedades.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {
  properties: properties[];
  
  constructor(
    private propiedadesServices: propiedadesService,
    private router: Router) 
    { }

  ngOnInit() {
    this.properties = this.propiedadesServices.getAll();
  }

  ionViewWillEnter() {
    this.properties = this.propiedadesServices.getAll();
  }

   //update a game
   update(code: number) {
    this.router.navigate(["/propiedades/edit/" + code]);
  }

  //game details
  viewDetails(code: number) {
    this.router.navigate(["/propiedades/detail/" + code]);
  }
}


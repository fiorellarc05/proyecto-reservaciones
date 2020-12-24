import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registroService } from './registro.service';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formUserAdd: FormGroup;

  constructor(
    public navCtrl: NavController,
    private serviceRegistro: registroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formUserAdd = new FormGroup({
      id_user: new FormControl(
        1,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      u_type: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }
      ),
      u_name: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)]
        }
      ),
      u_password: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(8)]
        }
      ),
    });
  }
  
  //add user
  addUser() {
    if (!this.formUserAdd.valid) {
      return;
    }
    this.serviceRegistro.addUser(
      this.formUserAdd.value.id_user,
      this.formUserAdd.value.u_type,
      this.formUserAdd.value.u_name,
      this.formUserAdd.value.u_password,
    );
    this.formUserAdd.reset();
    this.router.navigate(['/home']);
  }

  //route to properties
  huesped() {
    this.navCtrl.navigateRoot("/propiedades");
  }

  //route to host options
  arrendatario() {
    this.navCtrl.navigateRoot("/propiedades");
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { propiedadesService } from '../propiedades.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})


export class AddPage implements OnInit {
  formPropiedadAdd: FormGroup;

  constructor(
    private servicePropiedades: propiedadesService,
    private router: Router
  ) { }


  //validate the inputs
  ngOnInit() {
    this.formPropiedadAdd = new FormGroup({
      id_prop: new FormControl(
        1,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      prop_name: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)]
        }
      ),
      prop_ubi: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)]
        }
      ),
      prop_people: new FormControl(
        1,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      prop_type: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }
      ),
      pets: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      
    });
  }
  
  //add game
  addPropiedad() {
    if (!this.formPropiedadAdd.valid) {
      return;
    }
    this.servicePropiedades.addPropiedad(
      this.formPropiedadAdd.value.id_prop,
      this.formPropiedadAdd.value.prop_name,
      this.formPropiedadAdd.value.prop_ubi,
      this.formPropiedadAdd.value.prop_people,
      this.formPropiedadAdd.value.prop_type,
      this.formPropiedadAdd.value.pets
    );
    this.formPropiedadAdd.reset();
    this.router.navigate(['/propiedades']);
  }

}

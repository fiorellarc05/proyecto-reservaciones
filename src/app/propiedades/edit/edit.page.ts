import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { propiedadesService } from "../propiedades.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { properties } from '../propiedades.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
    properties: properties;
    formPropiedadEdit: FormGroup;
  
    constructor(
      private activeRouter: ActivatedRoute,
      private servicePropiedades: propiedadesService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.activeRouter.paramMap.subscribe(paramMap => {
        if (!paramMap.has('propiedadId')) {
          return;
        }
        const propiedadId = parseInt(paramMap.get('propiedadId'));
        this.properties = this.servicePropiedades.getPropiedad(propiedadId);
      });
  
      //validate the inputs
      this.formPropiedadEdit = new FormGroup({
        id_prop: new FormControl(this.properties.id_prop,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.min(1)],
          }
        ),
        prop_name: new FormControl(this.properties.prop_name,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(3)],
          }
        ),
        prop_ubi: new FormControl(this.properties.prop_ubi,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(3)],
          }
        ),
        prop_people: new FormControl(this.properties.prop_people,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.min(1)],
          }
        ),
        prop_type: new FormControl(this.properties.prop_type,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(1)],
          }
        ),
        pets: new FormControl(this.properties.pets,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(1)],
          }
        ),
     
      });
  
      this.formPropiedadEdit.value.id_prop = this.properties.id_prop;
  
    }
  
    //edit game
    editPropiedad() {
      if (!this.formPropiedadEdit.valid) {
        return;
      }
      this.servicePropiedades.editPropiedad(
        this.formPropiedadEdit.value.id_prop,
        this.formPropiedadEdit.value.prop_name,
        this.formPropiedadEdit.value.prop_ubi,
        this.formPropiedadEdit.value.prop_people,
        this.formPropiedadEdit.value.prop_type,
        this.formPropiedadEdit.value.pets
      );
      this.formPropiedadEdit.reset();
      this.router.navigate(['./propiedades']);
    }
  }

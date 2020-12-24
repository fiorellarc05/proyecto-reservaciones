import { Injectable } from '@angular/core';
import { properties } from './propiedades.model';

@Injectable({
  providedIn: 'root'
})

export class propiedadesService {
  private properties: properties[] = [

    //games array
    {
      id_prop: 1,
      prop_name: "Casa Bella",
      prop_ubi: "Playa Hermosa,Puntarenas",
      prop_people: 10,
      prop_type: "Casa",
      pets: "Sí"
    },
  ];

  constructor() { }

  // get all elements to array
  getAll() {
    return [...this.properties];
  }
  //get elements for ID
  getPropiedad(propiedadId: number) {
    return {
      ...this.properties.find(
        properties => {
          return properties.id_prop === propiedadId;
        }
      )
    };
  }
  deletePropiedad(propiedadId: number) {
    this.properties = this.properties.filter(
      properties => {
        return properties.id_prop !== propiedadId;
      }
    );
  }

  //add properties to array
  addPropiedad(
    id_prop: number,
    prop_name: string,
    prop_ubi: string,
    prop_people: number,
    prop_type: string,
    pets: string,
  ) {
    const properties: properties = {
      id_prop: id_prop,
      prop_name: prop_name,
      prop_ubi: prop_ubi,
      prop_people: prop_people,
      prop_type: prop_type,
      pets: pets
    }
    this.properties.push(properties);
  }

  //edit property
  editPropiedad(
    id_prop: number,
    prop_name: string,
    prop_ubi: string,
    prop_people: number,
    prop_type: string,
    pets: string,
  ) {
    let index = this.properties.map((x) => x.id_prop).indexOf(id_prop);

    this.properties[index].id_prop = id_prop;
    this.properties[index].prop_name = prop_name;
    this.properties[index].prop_ubi = prop_ubi;
    this.properties[index].prop_people = prop_people;
    this.properties[index].prop_type = prop_type;
    this.properties[index].pets = pets;
   
    console.log(this.properties);
  }
  
  //add events to array
  
}



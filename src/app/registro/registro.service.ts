import { Injectable } from '@angular/core';
import { users } from './registro.model';

@Injectable({
  providedIn: 'root'
})
export class registroService {

  private users: users[] = [
    //users array
    {
      id_user: 1,
      u_type: 1,
      u_name: "admin",
      u_password: "admin",
    },
    {
      id_user: 2,
      u_type: 0,
      u_name: "Fio Rodríguez",
      u_password: "123456789",
    },
  ];


  constructor() { }

  // get all elements to array
  getAll() {
    return [...this.users];
  }

  //get elements for ID
  getUser(userId: number) {
    return {
      ...this.users.find(
        users => {
          return users.id_user === userId;
        }
      )
    };
  }

  //add users to array
  addUser(
    id_user: number,
    u_name: string,
    u_password: string,
  ) {
    const users: users = {
      id_user: id_user,
      u_type: 0,
      u_name: u_name,
      u_password: u_password,
    }
    this.users.push(users);
  }

}

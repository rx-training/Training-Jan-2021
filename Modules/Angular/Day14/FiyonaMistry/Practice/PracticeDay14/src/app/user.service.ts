import { Injectable } from '@angular/core';

export class User{
  constructor(public name : string, public isAuthorized = false){}
}

const fiyona = new User('Fiyona', true);
const divyang = new User('Divyang', false);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = divyang;

  constructor() { }

  getNewUser(){
    return this.user = this.user === divyang ? fiyona : divyang;
  }
}

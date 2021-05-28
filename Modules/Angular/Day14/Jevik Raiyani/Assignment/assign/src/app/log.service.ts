import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs : string[] = [];
  constructor() {
   
    }
    log(message:string){
      this.logs.push(message);
      console.log(message);
    }
   
}

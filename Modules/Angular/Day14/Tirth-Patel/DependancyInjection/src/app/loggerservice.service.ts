import { Injectable } from '@angular/core';

@Injectable()

export class LoggerserviceService {

  public log(name:string){
    console.log("This is" +name +"method Name")
  }
  constructor() { }
}

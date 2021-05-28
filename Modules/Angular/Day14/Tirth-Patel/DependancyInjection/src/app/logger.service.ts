import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  logs:string[]  = [];

  log(message:string){
    this.logs.push(message);
    console.log(message);
  }

  constructor() { }
}
function silentLoggerFn() {}

  export const SilentLogger = {
    logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
    log: silentLoggerFn
  };


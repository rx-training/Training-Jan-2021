import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  constructor() { }
  public log(Message:any)
  {
      console.log(Message);
  }
}

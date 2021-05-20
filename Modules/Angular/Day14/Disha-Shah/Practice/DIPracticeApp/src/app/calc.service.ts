import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public add(lvalue:number,rvalue :number)
  {
  return lvalue+rvalue;
  }

  public display()
  {
    console.log("Service called");
  }
}

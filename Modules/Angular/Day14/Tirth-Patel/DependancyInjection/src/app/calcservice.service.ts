import { Injectable } from '@angular/core';

@Injectable()
export class CalcserviceService {

  constructor() { }
  public add(lvalue:number,rvalue :number)
{
return lvalue+rvalue;
}

public display()
{
  console.log("Service called-calcService");
}
}

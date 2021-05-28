import { Injectable,Inject } from '@angular/core';
import { LoggerserviceService } from './loggerservice.service';
import { Observable } from 'rxjs';
@Injectable()
export class ListDemoService {
  list:number[]= [];


  constructor(@Inject(LoggerserviceService)private loggerservice) { }
  public addNum(num:number){
    this.list.push(num);
    this.loggerservice.log("addNum");
    
  }
  public getList(){
    this.loggerservice.log('getList');
    return this.list;
  }
  public getnumbers() :any {
    const numbersObservable = new 
    Observable (o=>{
      setTimeout(() => {
        o.next(this.list)
      }, 1000);
    });
    return numbersObservable;
  }
}


import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(@Inject(MasterService)private masterService: MasterService) { 
    this.master = masterService.master;
  }

  message = "This is from student service.";
  count = 0;
  master:any;

  list:any[] = [1,2,3,4,5];

  public getnumbers(): any {
    const numbersObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.list);
           }, 1000);
    });

    return numbersObservable;
  }
}

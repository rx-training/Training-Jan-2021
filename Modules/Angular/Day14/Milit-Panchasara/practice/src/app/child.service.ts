import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends MasterService {

  constructor() {
    super();
  }

  master = "THIS IS FROM MASTER SERVICE. UPDATED.....";
}

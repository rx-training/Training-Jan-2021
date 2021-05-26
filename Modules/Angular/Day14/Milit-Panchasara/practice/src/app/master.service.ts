import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  master = "THIS IS FROM MASTER SERVICE.";
}

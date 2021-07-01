import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  printTicket(id: number){
    this.router.navigate(['/bookinghistory',
    {
      outlets: {
        'print': ['print', id]
      }
    }]);
  }

  constructor(private router: Router) { }
}

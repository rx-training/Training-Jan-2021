import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history.service';
import { ShowTimmeService } from '../services/show-timme.service';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-resend-booking-conformation',
  templateUrl: './resend-booking-conformation.component.html',
  styleUrls: ['./resend-booking-conformation.component.css']
})
export class ResendBookingConformationComponent implements OnInit {

  History


  constructor(private ticket: TicketsService,
    private routenavigate: Router,
    private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.getAll().subscribe(res => {
      this.History = res.filter(x => x.userGmail == localStorage.getItem('userGmail'))
        .sort((a, b) => {
          return new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime();

        })
      // console.log(this.History)
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            return this.routenavigate.navigate(['/login'])
          }
        }
      })

  }

  cancelBooking(id, showDate) {

    if (new Date(showDate).getTime() < new Date().getTime()) {
      alert('Not possible')
      return
    }
    this.ticket.delete(id).subscribe(data => {
      alert('delete successfully You will get refund according our pilicy')
      window.location.reload()
    })
  }


}

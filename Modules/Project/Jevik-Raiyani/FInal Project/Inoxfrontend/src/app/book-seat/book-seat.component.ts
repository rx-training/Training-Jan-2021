import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../services/tickets.service';
import { VCinemaScreenService } from '../services/v-cinema-screen.service';
import { VSeatService } from '../services/vseat.service';
import { VUserBookingHistoryService } from '../services/vuser-booking-history.service';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {

  ShowId: number
  screenId: number

  TotalSeat
  bookedSeat
  AvaliableSeat

  TotaRowId: number[] = []
  WantBook: number[] = []

  avalableSeatMap = new Map<number, boolean>()

  constructor(private route: ActivatedRoute,
    private history: VUserBookingHistoryService,
    private vSeat: VSeatService,
    private vCinemaScreen: VCinemaScreenService,
    private routenavigate:Router,
    private ticket:TicketsService) { }

  ngOnInit(): void {
    this.ShowId = parseInt(this.route.snapshot.paramMap.get('id'));
   // console.log(this.ShowId)

    this.history.getAll().subscribe(data => {
      this.bookedSeat = data.filter(x => x.showTimeId == this.ShowId);
      // console.log(this.bookedSeat)

      for (const i of this.bookedSeat) {
        this.avalableSeatMap.set(i.seatId, false);
      }
    })

    this.vCinemaScreen.getAll().subscribe(data => {
      this.screenId = data.filter(x => x.showTimeId == this.ShowId)[0].screenId
    })

    this.vSeat.getAll().subscribe(data => {
      this.TotalSeat = data
        .filter(x => x.screenId == this.screenId)
        .sort((a, b) => { 
          return a.seatNo - b.seatNo 
        }).sort((a, b) => {
          return  a.rowNo - b.rowNo

        })
      //console.log(this.cinemaId)
      // console.log(this.TotalSeat) 

      this.AvaliableSeat = data.filter(x => x.screenId == this.screenId)
                          .filter(o1 =>!this.bookedSeat.find(o2 => o1.seatId === o2.seatId));
    //  console.log(this.AvaliableSeat)

      if(this.AvaliableSeat.length == 0){
        alert('Screen is Full')
      }

      for (const j of this.AvaliableSeat) {
        this.avalableSeatMap.set(j.seatId, true);
      }

      this.TotaRowId = this.TotalSeat.map(x => x.rowId)
        .filter((value, index, self) => self.indexOf(value) === index)
    })

    //console.log(this.avalableSeatMap)

  }

  onSelect(seatid) {
    let intSeatid = parseInt(seatid)
    this.WantBook.push(intSeatid)

    if (this.WantBook.filter(x => x == intSeatid).length % 2 == 0) {

      this.WantBook = this.WantBook.filter(x => x != intSeatid)
    }
    //console.log(this.WantBook)

  }
  getHeight(id){
    if(id==1){
      return '30px'
    }
    if(id == 2){
      return '40px'
    }
  }
  paddingleft(id){
    if(id==1){
      return '15px'
    }
    if(id == 2){
      return '20px'
    }
  }

  book() {  
    //console.log(this.WantBook.length)
    if(this.WantBook.length == 0){
      alert('Select Seat')
      return;
    }
    this.ticket.getAll().subscribe(res=>{
      this.routenavigate.navigate(['booknow/BookSeat/UserDetail',this.ShowId,JSON.stringify(this.WantBook)])
      },   
      err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
        return  this.routenavigate.navigate(['/login'])
        }
      }
    })
     

    }
}
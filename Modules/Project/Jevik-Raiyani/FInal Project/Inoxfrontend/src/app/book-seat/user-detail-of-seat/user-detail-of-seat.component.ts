import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { VCinemaScreenService } from 'src/app/services/v-cinema-screen.service';
import { VSeatService } from 'src/app/services/vseat.service';

@Component({
  selector: 'app-user-detail-of-seat',
  templateUrl: './user-detail-of-seat.component.html',
  styleUrls: ['./user-detail-of-seat.component.css']
})
export class UserDetailOfSeatComponent implements OnInit {
  showId:number
  WantBook 
  SeatDetails
  
  paymentDetail : string = ""

  payId = 0
  LocalPaymentMethods
  constructor(private activeRoute:ActivatedRoute,
              private ticket: TicketsService,
              private router:Router,
              private vCinemaScreen: VCinemaScreenService,
              private vSeat: VSeatService,
              private paymentMethod:PaymentTypeService) { }

  ngOnInit(): void {
    this.showId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    //console.log(this.showId)
    this.WantBook = this.activeRoute.snapshot.paramMap.get('SeatArray');
    this.WantBook = this.WantBook.substring(1, this.WantBook.length - 1).split(',').map(Number)
   // console.log(this.WantBook)

    this.vSeat.getAll().subscribe(data => {
      this.SeatDetails = data
        .filter(o1 => this.WantBook.find(o2=>o1.seatId == o2))
        //console.log(this.SeatDetails)
    })
    
    this.paymentMethod.getAll().subscribe(data=>{
      this.LocalPaymentMethods =data
    })
  }

  onSelectType(id){
    this.payId= id
   // console.log(this.payId)
  }

  book(){
     if(this.payId == 0){
       alert('Choose payment Method')
       return;
     }
     if(this.paymentDetail.trim() == ''){
      alert('Enter payment Detail')
       return
     }
     if(this.paymentDetail.trim().length > 10){
      alert('Payment Detail should contain 10 char')
       return
     }
     for (const i of this.WantBook) {
      {
        this.ticket.create(
          { 
            showTimeId: this.showId,
            seatId: i,
            price: 120,
            userGmail: localStorage.getItem('userGmail'), 
            paymentId: this.payId,
            paymentDetail: this.paymentDetail,
            date: new Date()  
          }
        ).subscribe(data => {
          console.log(data)
        });
      }
    }
     alert('Booking SuccessFully')
     this.router.navigate(['home'])
  }
}

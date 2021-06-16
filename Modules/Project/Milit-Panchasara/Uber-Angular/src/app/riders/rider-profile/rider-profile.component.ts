import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiderProfile, RiderProfileInterface } from 'src/app/models/RiderProfile';
import { RiderService } from '../rider.service';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.css']
})
export class RiderProfileComponent implements OnInit {

  user:RiderProfileInterface = new RiderProfile();

  constructor(private riderService:RiderService, private router:Router) { }

  ngOnInit(): void {
    this.riderService.profileSub.subscribe(x => {
      this.user = x;
    });

    if(this.user.riderId == 0) {
      this.user = this.riderService.profileData;
    }
  }

  userLogOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}

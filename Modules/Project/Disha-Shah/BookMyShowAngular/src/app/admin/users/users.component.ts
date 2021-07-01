import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/movies/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersList: Array<IUser> = [];

  getAllUsersSub: Subscription;

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(){
    this.getAllUsersSub.unsubscribe();  
  }

  getUsers(){
    this.getAllUsersSub = this.usersService.getUsers()
    .subscribe(users => {
      this.usersList = users,
      console.log(this.usersList)
    })
  }

}

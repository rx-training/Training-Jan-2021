import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/movies/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersList: Array<IUser> = [];

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(){
    this.getUsers();  
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(users => {
      this.usersList = users,
      console.log(this.usersList)
    })
  }

}

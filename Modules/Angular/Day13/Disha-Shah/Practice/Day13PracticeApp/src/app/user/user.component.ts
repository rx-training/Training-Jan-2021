import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string;

  @Output() userData = new EventEmitter();  ​

  listUser:any=[];  ​

  AddMessage(){  ​

   this.listUser.push(this.userName);  ​

   this.userData.emit(this.listUser);  ​

  }  ​

  RemoveMessage()  ​

   {  ​

      var index = this.listUser.indexOf(this.userName);  ​

      if (index !== -1) {  ​

         this.listUser.splice(index, 1);  ​

      }  ​

   this.userData.emit(this.listUser);  ​

   }

  constructor() { }

  ngOnInit(): void {
  }

}

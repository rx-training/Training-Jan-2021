import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  ServerId:number=10;
  ServerStatus:string="Off Line"
  AllowServer:boolean=false;

  constructor() {
    setTimeout(()=>{
      this.AllowServer=true;
    },2000);
   }


  ngOnInit(): void {
  }

  data:string='hello';
  onServerName(event:any)
  {
    this.data=(<HTMLInputElement>event.target).value

  }



}

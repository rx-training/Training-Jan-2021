import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})

export class NgIfComponent implements OnInit{

  show:boolean = true;
  hero = true;
  name = "Mr.Nice";
  serverName = "";
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  showOrHide(){
    if(this.show==true){
      this.show = false;
    }
    else{
      this.show = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

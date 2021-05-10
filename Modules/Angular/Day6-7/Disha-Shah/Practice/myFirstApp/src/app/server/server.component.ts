import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles: [`
  p {
    color: red;
  }
  `]
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus="offline";
  allowNewServer = true;
  serverCreationStatus = "No server was created!";
  serverName = "";

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is: ${this.serverName}`;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

}

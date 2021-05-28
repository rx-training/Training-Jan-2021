import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowserver = false;
  serverCreationStatus = 'No server was created';
  servername = '';
  servercreated = false;
  servers = ['Testserver','TestServer2'];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowserver = true;
    }, 4000);
  
  }
  onCreateServer(){
    this.servers.push(this.servername);
    this.servercreated =true;
    this.serverCreationStatus = 'server was created! Name is'+ this.servername;
  }
  onupdateServerName(event:any){
      this.servername = (<HTMLInputElement>event.target).value
  }

}

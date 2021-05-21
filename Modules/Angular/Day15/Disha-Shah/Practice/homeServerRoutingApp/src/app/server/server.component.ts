import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serversList: {id: number, name: string}[] = [];

  onReload(){
    this.router.navigate(['server'], {relativeTo: this.route})
  }

  constructor(private serversService: ServerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.serversList = this.serversService.getServers();

  }

}

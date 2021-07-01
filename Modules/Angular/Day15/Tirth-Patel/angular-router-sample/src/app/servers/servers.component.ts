import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversList: {id: number, name: string}[] = [];
  constructor(private router:Router,private route:ActivatedRoute,private serversService:ServerService) { }
 
  ngOnInit(): void {
    
    this.serversList = this.serversService.getServers();
  }

   
  
  onReaload(){
    // this.router.navigate(['/servers'],{relativeTo: this.route});
  }
}

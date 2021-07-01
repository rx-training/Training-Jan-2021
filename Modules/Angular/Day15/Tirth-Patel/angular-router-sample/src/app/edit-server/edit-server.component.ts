import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
server:{id:number,name:string}
serverName='';
serverid=0;
  constructor(private ss :ServerService,private route:ActivatedRoute) { }
allowEdit =false;
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryparams:Params)=>{
        this.allowEdit = queryparams['allowEdit']===1 ? true:false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.ss.getServer(1);
    this.serverName = this.server.name;
    
  }
  onUpdateServer(){
    this.ss.updateServer(this.server.id,{name:this.server.name})
  }

}

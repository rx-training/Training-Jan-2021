import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
server:{id:number,name:string};

  constructor(private ss:ServerService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id =+this.route.snapshot.params['id']
    this.server=this.ss.getServer(id);
    console.log(this.server)
    this.route.params.subscribe(
      (params:Params)=>
      {
        this.server = this.ss.getServer[+params['id']]
      }
    )
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})

  }
}


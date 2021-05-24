import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../server.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: { id: number, name: string } | undefined;
  serverId: number | undefined;
  serverName: string | undefined;
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServerService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverId = this.server?.id;
    this.serverName = this.server?.name;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server?.id, {name: this.serverName});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if(this.serverName!=this.server?.name && !this.changesSaved){
      return confirm("Do you want to discard the changes?");
    }
    else{
      return true;
    }
  }

}

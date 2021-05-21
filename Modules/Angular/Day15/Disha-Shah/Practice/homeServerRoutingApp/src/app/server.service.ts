import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private servers = [
    {id: 1, name: "Production Server"},
    {id: 2, name: "Test Server"},
    {id: 3, name: "Dev Server"}
  ];

  getServers(){
    return this.servers;
  }

  getServer(id: number){
    const server = this.servers.find(
      (s) => {
        return s.id == id;
      }
    );

    return server;
  }

  updateServer(id: number | undefined, serverInfo: {name: string | undefined} | undefined){
    const server = this.servers.find(
      (s) => {
        return s.id == id;
      }
    );

    if(server){
      server.name = server.name;
    }
  }

  constructor() { }
}

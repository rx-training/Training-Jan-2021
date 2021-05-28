import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ServerService {
  serversList:{id:number,name:string}[]=[];;
  

  constructor() { 
    
    this.serversList.push({
      id:1,name:"TestingServer1"
    },{
      id:2,name:"TestingServer2"
    },{
      id:3,name:"TestingServer3"
    })
  }
  getServers(){
    
    return this.serversList;
    
  }
  getServer(id:number){
    const server = this.serversList.find((s)=>{
      return s.id==id;
    });
   
    return server;
  }
  updateServer(id:number,serverinfo:{name:string}){
    const server = this.serversList.find((s)=>{
      return s.id==id;
    });
    if(server){
      server.name = serverinfo.name;
    }
    console.log("serverUpdated");
    console.log(server)
  }
  
}

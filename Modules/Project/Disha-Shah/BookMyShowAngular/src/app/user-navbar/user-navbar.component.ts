import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  /*
$("#next-trigger").click(function(){
  $('#loginModal').modal('hide');
  $('#registerModal').modal('show');
});


$("#back-trigger").click(function(){
  $('#registerModal').modal('hide');
  $('#loginModal').modal('show');
}) */

// toRegister(){

// }

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../../../assets/js/main.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show:boolean=true;

  changestatus()
  {
   if(this.show==true)
   {
     this.show=false;
   }
   else
   {
     this.show=true
   }
  }

}

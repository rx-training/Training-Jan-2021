import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getmaxnum()
    {
     var maxnum;
     var number1=parseInt(prompt("enter the  number 1"));
     var number2=parseInt(prompt("enter the number 2"));
     var number3=parseInt(prompt("enter the number 3"));
     if(number1>number2 && number1>number3)
     {
         maxnum=number1
     }
     else if(number2>number3  && number2>number1)
     {
         maxnum=number2
     }
     else
     {
         maxnum=number3
     
        }
        var array=[number1,number2,number3];
        var sum=0
        for(var i=0;i<3;i++)
        {
            if(array[i]>40)
            {
                sum=array[i]+sum;
            }
        
        }
        
        alert("Maximu number :- "+ maxnum + " and sum :- "  + sum)


    }

}

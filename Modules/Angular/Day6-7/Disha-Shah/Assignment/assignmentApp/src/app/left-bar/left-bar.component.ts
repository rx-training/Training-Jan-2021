import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  ImgUrl1 = "https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg";

  ImgUrl2 = "https://th.bing.com/th/id/OIP.XwwEnIRycVbZAlKEJgDXsQHaD9?pid=ImgDet&w=1571&h=839&rs=1";

  dummyText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odit perferendis voluptates possimus reiciendis.";

  constructor() { }

  ngOnInit(): void {
  }

}

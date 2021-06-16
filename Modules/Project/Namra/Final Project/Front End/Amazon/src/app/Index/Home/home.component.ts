import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-home',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class HomeComponent implements OnInit {

  productAr : Product[] = [];
  constructor(private demoService : DemoService) { }

  ngOnInit(): void {
    this.demoService.getData().subscribe(
      data=>{
        this.productAr = data;
      }
    );
  }

}

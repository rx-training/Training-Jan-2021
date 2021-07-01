import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicNavbarService } from 'src/app/dynamic-navbar.service';
import { IDynamicNavbar } from 'src/app/models/IDynamicNavbar';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit, OnDestroy {

  navbarsList: Array<IDynamicNavbar> = [];

  getAllNavbarsSub: Subscription;

  constructor(private navbarService: DynamicNavbarService) { }

  ngOnInit(): void {
    this.getNavbars();
  }

  ngOnDestroy(){
    this.getAllNavbarsSub.unsubscribe();
  }

  getNavbars(){
    this.getAllNavbarsSub = this.navbarService.getDynamicNavbars()
    .subscribe(navbars => {
      this.navbarsList = navbars
    })
  }

  removeComponent(id: number){
    var c = confirm("Are you sure you want to delete?");
    if(c==true)
    {
      this.navbarsList = this.navbarsList.filter(h => h.navbarId !== id);
      this.navbarService.deleteNavbarComponent(id).subscribe();
    }
  }

}

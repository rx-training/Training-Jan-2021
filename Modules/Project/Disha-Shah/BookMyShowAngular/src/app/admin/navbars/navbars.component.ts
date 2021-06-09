import { Component, OnInit } from '@angular/core';
import { DynamicNavbarService } from 'src/app/dynamic-navbar.service';
import { IDynamicNavbar } from 'src/app/models/IDynamicNavbar';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  navbarsList: Array<IDynamicNavbar> = [];

  getNavbars(){
    this.navbarService.getDynamicNavbars()
    .subscribe(navbars => {
      this.navbarsList = navbars
    })
  }

  removeComponent(id: number){
    this.navbarsList = this.navbarsList.filter(h => h.navbarId !== id);
    this.navbarService.deleteNavbarComponent(id).subscribe();
  }

  constructor(private navbarService: DynamicNavbarService) { }

  ngOnInit(): void {
    this.getNavbars();
  }

}

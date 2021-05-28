import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  list:any[] = [
    {
      id:1,
      name:"milit"
    },
    {
      id:2,
      name:"udit"
    },
    {
      id:3,
      name:"jake"
    },
    {
      id:4,
      name:"amy"
    }
  ]


  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  reloadPage() {
    console.log(this.route);
    
      this.router.navigate(['heroes'], {relativeTo: this.route});
  }
}

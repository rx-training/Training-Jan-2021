import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',

})
export class CrisisDetailComponent implements OnInit {
  editName = '';
  crisis!: Crisis;
  editId=0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}
ngOnInit(){
  this.route.data
  .subscribe(data => {
    const crisis: Crisis = data.crisis;
    this.editName = crisis.name;
    this.crisis = crisis;
  });
  

}gotoHeroes(){
  this.router.navigate(['/heroes']);
}
// cancel() {
//   this.gotoCrises();
// }

// save() {
//   this.crisis.name = this.editName;
//   this.gotoCrises();
// }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from 'src/app/crisis';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.css']
})
export class CrisisDetailsComponent implements OnInit {
  crisis!: Crisis;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data.crisis;
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['/:id', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}

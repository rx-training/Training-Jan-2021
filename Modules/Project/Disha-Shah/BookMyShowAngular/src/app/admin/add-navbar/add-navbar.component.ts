import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicNavbarService } from 'src/app/dynamic-navbar.service';

@Component({
  selector: 'app-add-navbar',
  templateUrl: './add-navbar.component.html',
  styleUrls: ['./add-navbar.component.css']
})
export class AddNavbarComponent implements OnInit {

  addNavbarForm;

  constructor(
    private fb: FormBuilder,
    private navbarService: DynamicNavbarService
    ) {
    this.addNavbarForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit(): void {
    
  }

  componentSubmit(){
    console.log(this.addNavbarForm);

    var newComponent: any = {
      "name": this.addNavbarForm.value.name
    }

    console.log(newComponent);
    this.addComponent(newComponent);

    alert("Navbar Component added successfully");

    this.addNavbarForm.reset();

    window.location.reload();
  
  }

  addComponent(newComponent: any){
    this.navbarService.addNavbarComponent(newComponent)
    .subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
profileForm = new FormGroup({
  firstname : new FormControl(''),
  lastname:new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});
onSubmit(){
  console.log(this.profileForm.value)
}

}

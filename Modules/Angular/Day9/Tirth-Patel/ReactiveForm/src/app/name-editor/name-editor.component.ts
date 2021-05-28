import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms'
import {AppModule} from '../app.module'
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name =  new FormControl('');
updatename(){
  this.name.setValue('Tirth')
;}
}

import { Component } from '@angular/core';
export type EditorType = "control" | "group";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeDay9';
  editor : EditorType = "group"

  get showControl(){
    return this.editor == "control";
  }

  get showGroup(){
    return this.editor == "group";
  }

  toggleEditor(type : EditorType){
    this.editor = type;
  }
}

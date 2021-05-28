import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';
  currentclasses :{};
  currentstyles:{};
  canSave :boolean;
  isUnchanged:boolean;
  isSpecial:boolean;
  color:string;
   setCurrentStyles(){
    this.currentstyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }
  setCurrentClasses(){
    this.currentclasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  !this.isSpecial
    };
   
    
  }
}

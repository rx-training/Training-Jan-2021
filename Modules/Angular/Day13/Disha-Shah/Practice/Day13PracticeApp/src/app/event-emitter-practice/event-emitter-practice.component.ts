import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-emitter-practice',
  template: `
  <div>
    <div (click)="toggle()" class="btn btn-primary">Toggle</div>
    <div [hidden]="!visible">
      <p>Hello World!</p>
    </div>
 </div>`,
  styleUrls: ['./event-emitter-practice.component.css']
})
export class EventEmitterPracticeComponent implements OnInit {

  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterPracticeComponent } from './event-emitter-practice.component';

describe('EventEmitterPracticeComponent', () => {
  let component: EventEmitterPracticeComponent;
  let fixture: ComponentFixture<EventEmitterPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitterPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js20assignment1Component } from './js20assignment1.component';

describe('Js20assignment1Component', () => {
  let component: Js20assignment1Component;
  let fixture: ComponentFixture<Js20assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js20assignment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js20assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

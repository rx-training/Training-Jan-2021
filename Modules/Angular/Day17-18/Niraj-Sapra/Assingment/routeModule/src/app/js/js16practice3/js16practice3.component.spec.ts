import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16practice3Component } from './js16practice3.component';

describe('Js16practice3Component', () => {
  let component: Js16practice3Component;
  let fixture: ComponentFixture<Js16practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

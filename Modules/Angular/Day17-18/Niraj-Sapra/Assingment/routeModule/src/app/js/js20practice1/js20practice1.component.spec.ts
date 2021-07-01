import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js20practice1Component } from './js20practice1.component';

describe('Js20practice1Component', () => {
  let component: Js20practice1Component;
  let fixture: ComponentFixture<Js20practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js20practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js20practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

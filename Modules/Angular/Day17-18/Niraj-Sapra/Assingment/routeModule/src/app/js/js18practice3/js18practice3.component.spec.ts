import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js18practice3Component } from './js18practice3.component';

describe('Js18practice3Component', () => {
  let component: Js18practice3Component;
  let fixture: ComponentFixture<Js18practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js18practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js18practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

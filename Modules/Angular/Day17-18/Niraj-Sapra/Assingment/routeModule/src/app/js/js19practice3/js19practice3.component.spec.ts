import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice3Component } from './js19practice3.component';

describe('Js19practice3Component', () => {
  let component: Js19practice3Component;
  let fixture: ComponentFixture<Js19practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice6Component } from './js19practice6.component';

describe('Js19practice6Component', () => {
  let component: Js19practice6Component;
  let fixture: ComponentFixture<Js19practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

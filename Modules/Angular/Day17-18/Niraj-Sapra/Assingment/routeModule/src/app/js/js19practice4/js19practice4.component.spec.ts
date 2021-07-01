import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice4Component } from './js19practice4.component';

describe('Js19practice4Component', () => {
  let component: Js19practice4Component;
  let fixture: ComponentFixture<Js19practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

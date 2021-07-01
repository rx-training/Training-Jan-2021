import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice1Component } from './js19practice1.component';

describe('Js19practice1Component', () => {
  let component: Js19practice1Component;
  let fixture: ComponentFixture<Js19practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

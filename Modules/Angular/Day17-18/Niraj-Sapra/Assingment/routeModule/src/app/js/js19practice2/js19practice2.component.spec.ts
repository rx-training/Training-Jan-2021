import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice2Component } from './js19practice2.component';

describe('Js19practice2Component', () => {
  let component: Js19practice2Component;
  let fixture: ComponentFixture<Js19practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

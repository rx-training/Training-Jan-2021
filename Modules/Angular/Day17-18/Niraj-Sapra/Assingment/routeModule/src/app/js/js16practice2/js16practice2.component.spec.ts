import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16practice2Component } from './js16practice2.component';

describe('Js16practice2Component', () => {
  let component: Js16practice2Component;
  let fixture: ComponentFixture<Js16practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

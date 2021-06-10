import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16practice1Component } from './js16practice1.component';

describe('Js16practice1Component', () => {
  let component: Js16practice1Component;
  let fixture: ComponentFixture<Js16practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

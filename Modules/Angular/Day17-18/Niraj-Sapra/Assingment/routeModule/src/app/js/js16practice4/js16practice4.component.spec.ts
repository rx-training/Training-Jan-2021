import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16practice4Component } from './js16practice4.component';

describe('Js16practice4Component', () => {
  let component: Js16practice4Component;
  let fixture: ComponentFixture<Js16practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

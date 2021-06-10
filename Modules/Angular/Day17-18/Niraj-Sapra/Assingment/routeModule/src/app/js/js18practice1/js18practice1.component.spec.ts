import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js18practice1Component } from './js18practice1.component';

describe('Js18practice1Component', () => {
  let component: Js18practice1Component;
  let fixture: ComponentFixture<Js18practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js18practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js18practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

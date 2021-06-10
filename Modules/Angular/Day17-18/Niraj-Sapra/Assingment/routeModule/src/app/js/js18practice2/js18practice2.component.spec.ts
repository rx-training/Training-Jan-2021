import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js18practice2Component } from './js18practice2.component';

describe('Js18practice2Component', () => {
  let component: Js18practice2Component;
  let fixture: ComponentFixture<Js18practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js18practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js18practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

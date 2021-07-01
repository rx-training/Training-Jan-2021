import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js17practice1Component } from './js17practice1.component';

describe('Js17practice1Component', () => {
  let component: Js17practice1Component;
  let fixture: ComponentFixture<Js17practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js17practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js17practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

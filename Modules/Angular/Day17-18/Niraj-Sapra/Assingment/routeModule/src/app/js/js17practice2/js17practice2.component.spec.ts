import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js17practice2Component } from './js17practice2.component';

describe('Js17practice2Component', () => {
  let component: Js17practice2Component;
  let fixture: ComponentFixture<Js17practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js17practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js17practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

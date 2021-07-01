import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js17practice3Component } from './js17practice3.component';

describe('Js17practice3Component', () => {
  let component: Js17practice3Component;
  let fixture: ComponentFixture<Js17practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js17practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js17practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

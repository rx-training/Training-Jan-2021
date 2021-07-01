import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16practice5Component } from './js16practice5.component';

describe('Js16practice5Component', () => {
  let component: Js16practice5Component;
  let fixture: ComponentFixture<Js16practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

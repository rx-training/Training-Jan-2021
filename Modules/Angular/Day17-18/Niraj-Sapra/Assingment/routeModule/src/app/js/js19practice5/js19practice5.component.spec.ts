import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js19practice5Component } from './js19practice5.component';

describe('Js19practice5Component', () => {
  let component: Js19practice5Component;
  let fixture: ComponentFixture<Js19practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js19practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js19practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

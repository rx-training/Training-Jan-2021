import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical4Component } from './practical4.component';

describe('Practical4Component', () => {
  let component: Practical4Component;
  let fixture: ComponentFixture<Practical4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practical4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

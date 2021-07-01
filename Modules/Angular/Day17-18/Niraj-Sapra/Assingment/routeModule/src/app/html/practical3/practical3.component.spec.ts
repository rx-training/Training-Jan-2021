import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical3Component } from './practical3.component';

describe('Practical3Component', () => {
  let component: Practical3Component;
  let fixture: ComponentFixture<Practical3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practical3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

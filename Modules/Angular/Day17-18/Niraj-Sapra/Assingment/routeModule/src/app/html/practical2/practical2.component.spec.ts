import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical2Component } from './practical2.component';

describe('Practical2Component', () => {
  let component: Practical2Component;
  let fixture: ComponentFixture<Practical2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practical2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

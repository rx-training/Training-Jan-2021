import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical1Component } from './practical1.component';

describe('Practical1Component', () => {
  let component: Practical1Component;
  let fixture: ComponentFixture<Practical1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practical1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

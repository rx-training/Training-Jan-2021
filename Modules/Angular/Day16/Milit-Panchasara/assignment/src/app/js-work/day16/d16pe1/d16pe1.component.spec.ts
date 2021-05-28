import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D16pe1Component } from './d16pe1.component';

describe('D16pe1Component', () => {
  let component: D16pe1Component;
  let fixture: ComponentFixture<D16pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D16pe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D16pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

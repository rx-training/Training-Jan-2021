import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20pe1Component } from './d20pe1.component';

describe('D20pe1Component', () => {
  let component: D20pe1Component;
  let fixture: ComponentFixture<D20pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20pe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

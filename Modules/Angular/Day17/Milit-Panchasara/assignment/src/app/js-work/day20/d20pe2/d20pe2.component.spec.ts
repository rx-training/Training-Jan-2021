import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20pe2Component } from './d20pe2.component';

describe('D20pe2Component', () => {
  let component: D20pe2Component;
  let fixture: ComponentFixture<D20pe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20pe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20pe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

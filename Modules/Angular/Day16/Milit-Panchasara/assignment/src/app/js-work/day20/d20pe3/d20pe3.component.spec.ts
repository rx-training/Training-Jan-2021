import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20pe3Component } from './d20pe3.component';

describe('D20pe3Component', () => {
  let component: D20pe3Component;
  let fixture: ComponentFixture<D20pe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20pe3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20pe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20a1Component } from './d20a1.component';

describe('D20a1Component', () => {
  let component: D20a1Component;
  let fixture: ComponentFixture<D20a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

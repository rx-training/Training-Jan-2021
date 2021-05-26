import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D4a1Component } from './d4a1.component';

describe('D4a1Component', () => {
  let component: D4a1Component;
  let fixture: ComponentFixture<D4a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D4a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D4a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

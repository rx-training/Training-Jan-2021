import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D5p1Component } from './d5p1.component';

describe('D5p1Component', () => {
  let component: D5p1Component;
  let fixture: ComponentFixture<D5p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D5p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D5p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D16a1Component } from './d16a1.component';

describe('D16a1Component', () => {
  let component: D16a1Component;
  let fixture: ComponentFixture<D16a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D16a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D16a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D16p1Component } from './d16p1.component';

describe('D16p1Component', () => {
  let component: D16p1Component;
  let fixture: ComponentFixture<D16p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D16p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D16p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15a1Component } from './d15a1.component';

describe('D15a1Component', () => {
  let component: D15a1Component;
  let fixture: ComponentFixture<D15a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

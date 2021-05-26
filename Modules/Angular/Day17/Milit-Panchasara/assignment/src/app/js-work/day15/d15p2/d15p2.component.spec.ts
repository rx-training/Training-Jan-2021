import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15p2Component } from './d15p2.component';

describe('D15p2Component', () => {
  let component: D15p2Component;
  let fixture: ComponentFixture<D15p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

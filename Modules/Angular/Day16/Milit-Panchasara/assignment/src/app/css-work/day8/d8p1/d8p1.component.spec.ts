import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D8p1Component } from './d8p1.component';

describe('D8p1Component', () => {
  let component: D8p1Component;
  let fixture: ComponentFixture<D8p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D8p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D8p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

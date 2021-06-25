import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men999Component } from './men999.component';

describe('Men999Component', () => {
  let component: Men999Component;
  let fixture: ComponentFixture<Men999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Men999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

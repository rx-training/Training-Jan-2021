import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastForwardComponent } from './fast-forward.component';

describe('FastForwardComponent', () => {
  let component: FastForwardComponent;
  let fixture: ComponentFixture<FastForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastForwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

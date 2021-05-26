import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe6Component } from './d15pe6.component';

describe('D15pe6Component', () => {
  let component: D15pe6Component;
  let fixture: ComponentFixture<D15pe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

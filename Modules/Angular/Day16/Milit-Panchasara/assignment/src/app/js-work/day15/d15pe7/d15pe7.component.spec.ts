import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe7Component } from './d15pe7.component';

describe('D15pe7Component', () => {
  let component: D15pe7Component;
  let fixture: ComponentFixture<D15pe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

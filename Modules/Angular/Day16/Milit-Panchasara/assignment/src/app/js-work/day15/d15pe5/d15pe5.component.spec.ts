import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe5Component } from './d15pe5.component';

describe('D15pe5Component', () => {
  let component: D15pe5Component;
  let fixture: ComponentFixture<D15pe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

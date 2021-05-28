import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe4Component } from './d15pe4.component';

describe('D15pe4Component', () => {
  let component: D15pe4Component;
  let fixture: ComponentFixture<D15pe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p5Component } from './d19p5.component';

describe('D19p5Component', () => {
  let component: D19p5Component;
  let fixture: ComponentFixture<D19p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

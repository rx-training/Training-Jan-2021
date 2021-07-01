import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical5Component } from './practical5.component';

describe('Practical5Component', () => {
  let component: Practical5Component;
  let fixture: ComponentFixture<Practical5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practical5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

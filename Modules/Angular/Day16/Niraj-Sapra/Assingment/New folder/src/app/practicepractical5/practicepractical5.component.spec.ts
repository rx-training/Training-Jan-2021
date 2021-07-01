import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicepractical5Component } from './practicepractical5.component';

describe('Practicepractical5Component', () => {
  let component: Practicepractical5Component;
  let fixture: ComponentFixture<Practicepractical5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicepractical5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicepractical5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

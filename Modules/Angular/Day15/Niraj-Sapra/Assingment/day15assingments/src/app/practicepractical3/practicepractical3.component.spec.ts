import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicepractical3Component } from './practicepractical3.component';

describe('Practicepractical3Component', () => {
  let component: Practicepractical3Component;
  let fixture: ComponentFixture<Practicepractical3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicepractical3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicepractical3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

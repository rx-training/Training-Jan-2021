import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicepractical1Component } from './practicepractical1.component';

describe('Practicepractical1Component', () => {
  let component: Practicepractical1Component;
  let fixture: ComponentFixture<Practicepractical1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicepractical1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicepractical1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

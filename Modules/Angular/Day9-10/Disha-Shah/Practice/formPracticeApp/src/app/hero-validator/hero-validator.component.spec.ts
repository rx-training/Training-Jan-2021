import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroValidatorComponent } from './hero-validator.component';

describe('HeroValidatorComponent', () => {
  let component: HeroValidatorComponent;
  let fixture: ComponentFixture<HeroValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

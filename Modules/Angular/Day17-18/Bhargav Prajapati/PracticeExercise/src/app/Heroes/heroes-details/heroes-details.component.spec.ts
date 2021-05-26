import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailsComponent } from './heroes-details.component';

describe('HeroesDetailsComponent', () => {
  let component: HeroesDetailsComponent;
  let fixture: ComponentFixture<HeroesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

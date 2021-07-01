import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopSliderComponent } from './user-top-slider.component';

describe('UserTopSliderComponent', () => {
  let component: UserTopSliderComponent;
  let fixture: ComponentFixture<UserTopSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTopSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAdComponent } from './horizontal-ad.component';

describe('HorizontalAdComponent', () => {
  let component: HorizontalAdComponent;
  let fixture: ComponentFixture<HorizontalAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

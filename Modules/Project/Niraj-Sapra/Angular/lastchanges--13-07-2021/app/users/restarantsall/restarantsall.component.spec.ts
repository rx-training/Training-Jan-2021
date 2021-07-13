import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarantsallComponent } from './restarantsall.component';

describe('RestarantsallComponent', () => {
  let component: RestarantsallComponent;
  let fixture: ComponentFixture<RestarantsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestarantsallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarantsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

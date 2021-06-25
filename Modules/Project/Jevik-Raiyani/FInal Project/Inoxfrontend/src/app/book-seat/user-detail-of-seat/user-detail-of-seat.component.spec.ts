import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailOfSeatComponent } from './user-detail-of-seat.component';

describe('UserDetailOfSeatComponent', () => {
  let component: UserDetailOfSeatComponent;
  let fixture: ComponentFixture<UserDetailOfSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailOfSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailOfSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesForRecruitersComponent } from './services-for-recruiters.component';

describe('ServicesForRecruitersComponent', () => {
  let component: ServicesForRecruitersComponent;
  let fixture: ComponentFixture<ServicesForRecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesForRecruitersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesForRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

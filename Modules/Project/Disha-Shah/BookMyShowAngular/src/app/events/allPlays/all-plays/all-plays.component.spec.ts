import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlaysComponent } from './all-plays.component';

describe('AllPlaysComponent', () => {
  let component: AllPlaysComponent;
  let fixture: ComponentFixture<AllPlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

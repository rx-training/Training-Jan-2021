import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7MediaqueriesComponent } from './day7-mediaqueries.component';

describe('Day7MediaqueriesComponent', () => {
  let component: Day7MediaqueriesComponent;
  let fixture: ComponentFixture<Day7MediaqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7MediaqueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7MediaqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

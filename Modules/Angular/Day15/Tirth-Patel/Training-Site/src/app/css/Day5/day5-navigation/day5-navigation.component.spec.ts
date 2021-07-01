import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5NavigationComponent } from './day5-navigation.component';

describe('Day5NavigationComponent', () => {
  let component: Day5NavigationComponent;
  let fixture: ComponentFixture<Day5NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

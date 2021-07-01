import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6MenuListComponent } from './day6-menu-list.component';

describe('Day6MenuListComponent', () => {
  let component: Day6MenuListComponent;
  let fixture: ComponentFixture<Day6MenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6MenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

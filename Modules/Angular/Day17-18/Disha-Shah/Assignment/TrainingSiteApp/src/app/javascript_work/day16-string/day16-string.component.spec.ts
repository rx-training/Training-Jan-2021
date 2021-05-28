import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16StringComponent } from './day16-string.component';

describe('Day16StringComponent', () => {
  let component: Day16StringComponent;
  let fixture: ComponentFixture<Day16StringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16StringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16StringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

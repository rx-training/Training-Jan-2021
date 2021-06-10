import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7assingmentComponent } from './day7assingment.component';

describe('Day7assingmentComponent', () => {
  let component: Day7assingmentComponent;
  let fixture: ComponentFixture<Day7assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

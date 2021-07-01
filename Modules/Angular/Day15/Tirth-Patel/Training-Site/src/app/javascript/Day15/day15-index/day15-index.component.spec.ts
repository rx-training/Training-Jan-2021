import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15IndexComponent } from './day15-index.component';

describe('Day15IndexComponent', () => {
  let component: Day15IndexComponent;
  let fixture: ComponentFixture<Day15IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15IndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

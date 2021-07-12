import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7pComponent } from './day7p.component';

describe('Day7pComponent', () => {
  let component: Day7pComponent;
  let fixture: ComponentFixture<Day7pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

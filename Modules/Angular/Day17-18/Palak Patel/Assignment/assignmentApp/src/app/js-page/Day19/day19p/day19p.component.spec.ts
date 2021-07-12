import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19pComponent } from './day19p.component';

describe('Day19pComponent', () => {
  let component: Day19pComponent;
  let fixture: ComponentFixture<Day19pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

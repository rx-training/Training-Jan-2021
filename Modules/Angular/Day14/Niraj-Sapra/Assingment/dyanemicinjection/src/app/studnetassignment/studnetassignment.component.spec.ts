import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetassignmentComponent } from './studnetassignment.component';

describe('StudnetassignmentComponent', () => {
  let component: StudnetassignmentComponent;
  let fixture: ComponentFixture<StudnetassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudnetassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudnetassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

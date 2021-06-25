import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularJobDetailComponent } from './particular-job-detail.component';

describe('ParticularJobDetailComponent', () => {
  let component: ParticularJobDetailComponent;
  let fixture: ComponentFixture<ParticularJobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularJobDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

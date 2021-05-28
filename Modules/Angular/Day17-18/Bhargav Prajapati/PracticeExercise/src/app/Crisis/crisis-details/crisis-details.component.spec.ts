import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisDetailsComponent } from './crisis-details.component';

describe('CrisisDetailsComponent', () => {
  let component: CrisisDetailsComponent;
  let fixture: ComponentFixture<CrisisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

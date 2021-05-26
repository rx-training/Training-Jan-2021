import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisHomeComponent } from './crisis-home.component';

describe('CrisisHomeComponent', () => {
  let component: CrisisHomeComponent;
  let fixture: ComponentFixture<CrisisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

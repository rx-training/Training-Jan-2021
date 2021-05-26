import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectUsComponent } from './contect-us.component';

describe('ContectUsComponent', () => {
  let component: ContectUsComponent;
  let fixture: ComponentFixture<ContectUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

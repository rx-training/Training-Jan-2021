import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePracticeComponent } from './pipe-practice.component';

describe('PipePracticeComponent', () => {
  let component: PipePracticeComponent;
  let fixture: ComponentFixture<PipePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

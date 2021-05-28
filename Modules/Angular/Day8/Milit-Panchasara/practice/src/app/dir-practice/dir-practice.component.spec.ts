import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirPracticeComponent } from './dir-practice.component';

describe('DirPracticeComponent', () => {
  let component: DirPracticeComponent;
  let fixture: ComponentFixture<DirPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdemoComponent } from './studentdemo.component';

describe('StudentdemoComponent', () => {
  let component: StudentdemoComponent;
  let fixture: ComponentFixture<StudentdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

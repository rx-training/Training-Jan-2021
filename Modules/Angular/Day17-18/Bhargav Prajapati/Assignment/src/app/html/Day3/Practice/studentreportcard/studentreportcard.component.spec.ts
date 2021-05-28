import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreportcardComponent } from './studentreportcard.component';

describe('StudentreportcardComponent', () => {
  let component: StudentreportcardComponent;
  let fixture: ComponentFixture<StudentreportcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentreportcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentreportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

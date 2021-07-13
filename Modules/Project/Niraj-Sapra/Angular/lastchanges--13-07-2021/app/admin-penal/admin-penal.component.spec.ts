import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPenalComponent } from './admin-penal.component';

describe('AdminPenalComponent', () => {
  let component: AdminPenalComponent;
  let fixture: ComponentFixture<AdminPenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPenalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRidetypeListComponent } from './admin-ridetype-list.component';

describe('AdminRidetypeListComponent', () => {
  let component: AdminRidetypeListComponent;
  let fixture: ComponentFixture<AdminRidetypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRidetypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRidetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

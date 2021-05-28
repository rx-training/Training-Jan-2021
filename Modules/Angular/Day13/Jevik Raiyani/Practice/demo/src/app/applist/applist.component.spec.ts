import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplistComponent } from './applist.component';

describe('ApplistComponent', () => {
  let component: ApplistComponent;
  let fixture: ComponentFixture<ApplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

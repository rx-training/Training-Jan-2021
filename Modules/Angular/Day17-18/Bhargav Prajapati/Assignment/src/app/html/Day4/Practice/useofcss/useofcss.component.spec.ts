import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseofcssComponent } from './useofcss.component';

describe('UseofcssComponent', () => {
  let component: UseofcssComponent;
  let fixture: ComponentFixture<UseofcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseofcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseofcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

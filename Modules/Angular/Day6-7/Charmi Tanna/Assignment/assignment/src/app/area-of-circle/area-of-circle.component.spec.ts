import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfCircleComponent } from './area-of-circle.component';

describe('AreaOfCircleComponent', () => {
  let component: AreaOfCircleComponent;
  let fixture: ComponentFixture<AreaOfCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOfCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

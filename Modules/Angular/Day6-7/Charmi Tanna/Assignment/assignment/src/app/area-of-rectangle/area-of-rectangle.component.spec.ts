import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfRectangleComponent } from './area-of-rectangle.component';

describe('AreaOfRectangleComponent', () => {
  let component: AreaOfRectangleComponent;
  let fixture: ComponentFixture<AreaOfRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfRectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOfRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewComponentComponent } from './parent-view-component.component';

describe('ParentViewComponentComponent', () => {
  let component: ParentViewComponentComponent;
  let fixture: ComponentFixture<ParentViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

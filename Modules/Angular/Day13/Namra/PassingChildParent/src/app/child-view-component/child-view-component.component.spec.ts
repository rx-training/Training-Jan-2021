import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewComponentComponent } from './child-view-component.component';

describe('ChildViewComponentComponent', () => {
  let component: ChildViewComponentComponent;
  let fixture: ComponentFixture<ChildViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

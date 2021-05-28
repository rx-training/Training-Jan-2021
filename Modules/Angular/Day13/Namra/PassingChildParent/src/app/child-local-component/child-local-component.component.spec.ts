import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLocalComponentComponent } from './child-local-component.component';

describe('ChildLocalComponentComponent', () => {
  let component: ChildLocalComponentComponent;
  let fixture: ComponentFixture<ChildLocalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLocalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLocalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLocalComponentComponent } from './parent-local-component.component';

describe('ParentLocalComponentComponent', () => {
  let component: ParentLocalComponentComponent;
  let fixture: ComponentFixture<ParentLocalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLocalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLocalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponanatComponent } from './child-componanat.component';

describe('ChildComponanatComponent', () => {
  let component: ChildComponanatComponent;
  let fixture: ComponentFixture<ChildComponanatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponanatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponanatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

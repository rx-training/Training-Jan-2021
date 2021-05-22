import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompoComponent } from './child-compo.component';

describe('ChildCompoComponent', () => {
  let component: ChildCompoComponent;
  let fixture: ComponentFixture<ChildCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

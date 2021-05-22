import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompoComponent } from './parent-compo.component';

describe('ParentCompoComponent', () => {
  let component: ParentCompoComponent;
  let fixture: ComponentFixture<ParentCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

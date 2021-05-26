import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNestedformsComponent } from './reactive-nestedforms.component';

describe('ReactiveNestedformsComponent', () => {
  let component: ReactiveNestedformsComponent;
  let fixture: ComponentFixture<ReactiveNestedformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveNestedformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNestedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

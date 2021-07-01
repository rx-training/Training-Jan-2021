import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParentComponent } from './counter-parent.component';

describe('CounterParentComponent', () => {
  let component: CounterParentComponent;
  let fixture: ComponentFixture<CounterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

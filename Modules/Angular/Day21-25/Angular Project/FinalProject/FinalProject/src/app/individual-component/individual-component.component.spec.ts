import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualComponentComponent } from './individual-component.component';

describe('IndividualComponentComponent', () => {
  let component: IndividualComponentComponent;
  let fixture: ComponentFixture<IndividualComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

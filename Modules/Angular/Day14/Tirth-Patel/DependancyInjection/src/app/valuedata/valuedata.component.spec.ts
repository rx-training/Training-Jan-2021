import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuedataComponent } from './valuedata.component';

describe('ValuedataComponent', () => {
  let component: ValuedataComponent;
  let fixture: ComponentFixture<ValuedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

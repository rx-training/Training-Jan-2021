import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedFlightComponent } from './searched-flight.component';

describe('SearchedFlightComponent', () => {
  let component: SearchedFlightComponent;
  let fixture: ComponentFixture<SearchedFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

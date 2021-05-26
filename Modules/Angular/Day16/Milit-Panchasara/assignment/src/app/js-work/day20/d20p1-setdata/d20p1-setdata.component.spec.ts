import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20p1SetdataComponent } from './d20p1-setdata.component';

describe('D20p1SetdataComponent', () => {
  let component: D20p1SetdataComponent;
  let fixture: ComponentFixture<D20p1SetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20p1SetdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20p1SetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

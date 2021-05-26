import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D20p1GetdataComponent } from './d20p1-getdata.component';

describe('D20p1GetdataComponent', () => {
  let component: D20p1GetdataComponent;
  let fixture: ComponentFixture<D20p1GetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D20p1GetdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D20p1GetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

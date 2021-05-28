import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServerComponent } from './single-server.component';

describe('SingleServerComponent', () => {
  let component: SingleServerComponent;
  let fixture: ComponentFixture<SingleServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforcomponentComponent } from './ngforcomponent.component';

describe('NgforcomponentComponent', () => {
  let component: NgforcomponentComponent;
  let fixture: ComponentFixture<NgforcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

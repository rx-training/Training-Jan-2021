import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderwithperegraphComponent } from './borderwithperegraph.component';

describe('BorderwithperegraphComponent', () => {
  let component: BorderwithperegraphComponent;
  let fixture: ComponentFixture<BorderwithperegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderwithperegraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderwithperegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

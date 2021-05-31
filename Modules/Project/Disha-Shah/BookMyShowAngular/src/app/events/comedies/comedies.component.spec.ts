import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediesComponent } from './comedies.component';

describe('ComediesComponent', () => {
  let component: ComediesComponent;
  let fixture: ComponentFixture<ComediesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComediesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

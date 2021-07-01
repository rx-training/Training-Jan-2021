import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7ImgGallaryComponent } from './day7-img-gallary.component';

describe('Day7ImgGallaryComponent', () => {
  let component: Day7ImgGallaryComponent;
  let fixture: ComponentFixture<Day7ImgGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7ImgGallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7ImgGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

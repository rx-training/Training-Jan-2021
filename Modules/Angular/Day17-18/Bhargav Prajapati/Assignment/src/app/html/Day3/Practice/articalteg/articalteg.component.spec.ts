import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticaltegComponent } from './articalteg.component';

describe('ArticaltegComponent', () => {
  let component: ArticaltegComponent;
  let fixture: ComponentFixture<ArticaltegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticaltegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticaltegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

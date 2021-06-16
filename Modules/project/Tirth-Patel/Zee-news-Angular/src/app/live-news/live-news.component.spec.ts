import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNewsComponent } from './live-news.component';

describe('LiveNewsComponent', () => {
  let component: LiveNewsComponent;
  let fixture: ComponentFixture<LiveNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

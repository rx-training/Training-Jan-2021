import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLComponentComponent } from './htmlcomponent.component';

describe('HTMLComponentComponent', () => {
  let component: HTMLComponentComponent;
  let fixture: ComponentFixture<HTMLComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

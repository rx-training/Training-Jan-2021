import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectengleComponent } from './rectengle.component';

describe('RectengleComponent', () => {
  let component: RectengleComponent;
  let fixture: ComponentFixture<RectengleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectengleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectengleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

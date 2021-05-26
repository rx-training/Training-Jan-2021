import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentComponantComponent } from './perent-componant.component';

describe('PerentComponantComponent', () => {
  let component: PerentComponantComponent;
  let fixture: ComponentFixture<PerentComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerentComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

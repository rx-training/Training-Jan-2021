import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlacesToWorkComponent } from './best-places-to-work.component';

describe('BestPlacesToWorkComponent', () => {
  let component: BestPlacesToWorkComponent;
  let fixture: ComponentFixture<BestPlacesToWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPlacesToWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPlacesToWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

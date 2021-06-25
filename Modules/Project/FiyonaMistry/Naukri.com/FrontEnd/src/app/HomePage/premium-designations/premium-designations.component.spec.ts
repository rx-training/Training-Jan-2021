import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumDesignationsComponent } from './premium-designations.component';

describe('PremiumDesignationsComponent', () => {
  let component: PremiumDesignationsComponent;
  let fixture: ComponentFixture<PremiumDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumDesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

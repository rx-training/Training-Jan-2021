import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicejetFooterComponent } from './spicejet-footer.component';

describe('SpicejetFooterComponent', () => {
  let component: SpicejetFooterComponent;
  let fixture: ComponentFixture<SpicejetFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpicejetFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicejetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

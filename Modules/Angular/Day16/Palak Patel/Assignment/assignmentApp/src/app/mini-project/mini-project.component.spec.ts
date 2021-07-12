import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectComponent } from './mini-project.component';

describe('MiniProjectComponent', () => {
  let component: MiniProjectComponent;
  let fixture: ComponentFixture<MiniProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

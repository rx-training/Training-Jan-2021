import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptComponentComponent } from './java-script-component.component';

describe('JavaScriptComponentComponent', () => {
  let component: JavaScriptComponentComponent;
  let fixture: ComponentFixture<JavaScriptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

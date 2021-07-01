import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKeySkillsComponent } from './edit-key-skills.component';

describe('EditKeySkillsComponent', () => {
  let component: EditKeySkillsComponent;
  let fixture: ComponentFixture<EditKeySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKeySkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKeySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

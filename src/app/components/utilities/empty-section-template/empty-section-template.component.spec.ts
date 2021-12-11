import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySectionTemplateComponent } from './empty-section-template.component';

describe('EmptySectionTemplateComponent', () => {
  let component: EmptySectionTemplateComponent;
  let fixture: ComponentFixture<EmptySectionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptySectionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

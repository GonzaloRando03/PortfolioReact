import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2Component } from './project2.component';

describe('Project2Component', () => {
  let component: Project2Component;
  let fixture: ComponentFixture<Project2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

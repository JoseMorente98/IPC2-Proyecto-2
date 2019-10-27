import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionStudentComponent } from './evaluacion-student.component';

describe('EvaluacionStudentComponent', () => {
  let component: EvaluacionStudentComponent;
  let fixture: ComponentFixture<EvaluacionStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

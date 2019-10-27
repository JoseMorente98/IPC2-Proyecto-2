import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadStudentComponent } from './actividad-student.component';

describe('ActividadStudentComponent', () => {
  let component: ActividadStudentComponent;
  let fixture: ComponentFixture<ActividadStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

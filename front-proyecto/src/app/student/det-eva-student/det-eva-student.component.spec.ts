import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetEvaStudentComponent } from './det-eva-student.component';

describe('DetEvaStudentComponent', () => {
  let component: DetEvaStudentComponent;
  let fixture: ComponentFixture<DetEvaStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetEvaStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetEvaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

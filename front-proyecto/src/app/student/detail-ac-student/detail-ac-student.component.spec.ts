import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAcStudentComponent } from './detail-ac-student.component';

describe('DetailAcStudentComponent', () => {
  let component: DetailAcStudentComponent;
  let fixture: ComponentFixture<DetailAcStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAcStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAcStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

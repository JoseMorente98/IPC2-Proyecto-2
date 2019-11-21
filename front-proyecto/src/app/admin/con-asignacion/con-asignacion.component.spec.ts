import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConAsignacionComponent } from './con-asignacion.component';

describe('ConAsignacionComponent', () => {
  let component: ConAsignacionComponent;
  let fixture: ComponentFixture<ConAsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConAsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

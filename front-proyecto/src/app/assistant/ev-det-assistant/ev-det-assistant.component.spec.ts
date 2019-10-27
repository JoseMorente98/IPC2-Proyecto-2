import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvDetAssistantComponent } from './ev-det-assistant.component';

describe('EvDetAssistantComponent', () => {
  let component: EvDetAssistantComponent;
  let fixture: ComponentFixture<EvDetAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvDetAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvDetAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

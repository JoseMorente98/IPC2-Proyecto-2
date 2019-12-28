import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRecovery2Component } from './modal-recovery2.component';

describe('ModalRecovery2Component', () => {
  let component: ModalRecovery2Component;
  let fixture: ComponentFixture<ModalRecovery2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecovery2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRecovery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

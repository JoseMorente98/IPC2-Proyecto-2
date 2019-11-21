import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PubliDAuxPage } from './publi-d-aux.page';

describe('PubliDAuxPage', () => {
  let component: PubliDAuxPage;
  let fixture: ComponentFixture<PubliDAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliDAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PubliDAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationOnePage } from './notification-one.page';

describe('NotificationOnePage', () => {
  let component: NotificationOnePage;
  let fixture: ComponentFixture<NotificationOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

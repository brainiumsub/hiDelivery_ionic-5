import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationTwoPage } from './notification-two.page';

describe('NotificationTwoPage', () => {
  let component: NotificationTwoPage;
  let fixture: ComponentFixture<NotificationTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

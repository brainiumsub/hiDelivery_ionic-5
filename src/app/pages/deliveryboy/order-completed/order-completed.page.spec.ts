import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderCompletedPage } from './order-completed.page';

describe('OrderCompletedPage', () => {
  let component: OrderCompletedPage;
  let fixture: ComponentFixture<OrderCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

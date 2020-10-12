import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCustomerPage } from './home-customer.page';

describe('HomeCustomerPage', () => {
  let component: HomeCustomerPage;
  let fixture: ComponentFixture<HomeCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

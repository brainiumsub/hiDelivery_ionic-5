import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureImagePage } from './signature-image.page';

describe('SignatureImagePage', () => {
  let component: SignatureImagePage;
  let fixture: ComponentFixture<SignatureImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

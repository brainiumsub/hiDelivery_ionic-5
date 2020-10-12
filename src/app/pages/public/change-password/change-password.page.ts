import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from '@ionic/angular';
import { FrontendServiceProvider } from 'src/app/frontend-service/frontend.service';
import { Observable, interval } from 'rxjs';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage {

  ct: any = {};
  errDiv: boolean = false;
  serverMsgStatus: boolean = false;
  message: String;
  message_pass: String;
  message_confirm_pass: String;
  changepassDataObj: object = {};
  notification_count: any = localStorage.getItem('noti_count');
  notification_timer: any;
  dv_statusObj: object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _frontendServiceProvider: FrontendServiceProvider, public popoverCtrl: PopoverController, private alertCtrl: AlertController) {

    this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
      if (res.success == true) { this.notification_count = res.count_data; localStorage.setItem('noti_count', res.count_data); } else { console.log(res.message); }
    }, (error) => { console.log("Error : ", error); })

    /* Notification Timer Start */
    this.notification_timer = interval(5000).subscribe((val) => {

      this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
        if (res.success == true) { this.notification_count = res.count_data; } else { console.log(res.message); }
      }, (error) => { console.log("Error : ", error); })


    });
    /* Notification Timer End */

  }
async createAlert() {
  let alert = await this.alertCtrl.create({
    header: "You are blocked from administrator.",
    subHeader: '',
    buttons: ['Ok']
  });
  await alert.present();
  var myItem = localStorage.getItem('deviceToken');
  localStorage.clear();
  localStorage.setItem('deviceToken', myItem);
  // this.navCtrl.setRoot('LoginPage');
  this.navCtrl.navigateForward('LoginPage')

}


  ionViewDidLoad() {

    this.dv_statusObj = {
      "deliveryboy_id": localStorage.getItem("user-id")
    }


    this._frontendServiceProvider.getDeliveryBoyLatLong(this.dv_statusObj).subscribe((res) => {

      if (res.success == true) {
        if (res.data.isBlock == true) {
          this.createAlert();
        }
      } else {
        console.log(res.message);
      }

    }, (error) => {
      console.log("Error : ", error);
    })
    console.log('ionViewDidLoad ChangePasswordPage');
  }


  notificationDetails() {
    // this.navCtrl.setRoot('NotificationOnePage');
    this.navCtrl.navigateForward('NotificationOnePage')
  }

  changePasswordData() {
    this.errDiv = false;
    this.message_pass = '';
    this.message_confirm_pass = '';
    this.message = '';


    if ((this.ct.confirm_new_password == undefined || this.ct.confirm_new_password == '') && (this.ct.password == undefined || this.ct.password == '')) {
      this.errDiv = true;
      this.message_confirm_pass = 'This field is required.';
      this.message_pass = 'This field is required.';
      return false;
    }


    if (this.ct.password == undefined || this.ct.password == '') {
      this.errDiv = true;
      this.message_pass = 'Enter your new password.';
    } else if (this.ct.password.length <= 5) {
      this.errDiv = true;
      this.message_pass = 'Please enter at least 6 characters.';

    }


    if (this.ct.confirm_new_password == undefined || this.ct.confirm_new_password == '') {
      this.errDiv = true;
      this.message_confirm_pass = 'Enter your confirm password.';
    } else if (this.ct.confirm_new_password.length <= 5) {
      this.errDiv = true;
      this.message_confirm_pass = 'Please enter at least 6 characters.';

    } else if (this.ct.confirm_new_password != this.ct.password) {
      this.errDiv = true;
      this.message_confirm_pass = 'Password does not match the confirm password.';
    }


    if (this.ct.password == '' || this.ct.password == undefined || this.ct.password.length <= 5 || this.ct.confirm_new_password == '' || this.ct.confirm_new_password == undefined || this.ct.confirm_new_password.length <= 5 || this.ct.confirm_new_password != this.ct.password) {
      return false;
    }

    this.changepassDataObj = {
      "password": this.ct.password,
      "user_type": localStorage.getItem('user-type'),
      "user_id": localStorage.getItem('user-id'),
      "user_email": localStorage.getItem('user-email')
    }


    this._frontendServiceProvider.showLoader();

    this._frontendServiceProvider.requestChangePassword(this.changepassDataObj).subscribe((res) => {

      if (res.success == true) {
        this._frontendServiceProvider.dismissLoader();
        this.ct.password = '';
        this.ct.confirm_new_password = '';
        this.message = res.message;
        this.serverMsgStatus = res.success;
      } else {
        this._frontendServiceProvider.dismissLoader();
        this.message = res.message;
        this.serverMsgStatus = res.success;
      }

    }, (error) => {
      console.log("Error : ", error);
    })
  }

  public type = 'password';
  public showPass = false;

  public type2 = 'password';
  public showPass2 = false;


  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  showPassword2() {
    this.showPass2 = !this.showPass2;

    if (this.showPass2) {
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }

  async openPopover(myEvent) {

    let popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });
    popover.present();
  }

  ngOnDestroy() {
    this.notification_timer.unsubscribe();
  }



}

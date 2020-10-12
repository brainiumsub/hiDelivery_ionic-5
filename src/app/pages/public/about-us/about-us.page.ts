import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from '@ionic/angular';
// import { Observable } from 'rxjs/Observable';
import { Observable, interval } from 'rxjs';

import { PopoverPage } from '../popover/popover.page';
import { FrontendServiceProvider } from 'src/app/frontend-service/frontend.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  ct: any = {};
  aboutusDataObj: object = {};
  notification_count: any = localStorage.getItem('noti_count');
  notification_timer: any;
  dv_statusObj: object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _frontendServiceProvider: FrontendServiceProvider, public popoverCtrl: PopoverController, private alertCtrl: AlertController) {

    this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
      if (res.success == true) { this.notification_count = res.count_data; localStorage.setItem('noti_count', res.count_data); } else { console.log(res.message); }
    }, (error) => { console.log("Error : ", error); })


    /* Notification Timer Start */
    this.notification_timer = interval(5000).subscribe((val) => { //Observable.interval(5000)...

      this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
        if (res.success == true) { this.notification_count = res.count_data; } else { console.log(res.message); }
      }, (error) => { console.log("Error : ", error); })


    });
    /* Notification Timer End */

  }

  ngOnInit() {


    this.aboutusDataObj = {
      "page_id": '5af9330bdeabb5250c677bf9'
    }

    this._frontendServiceProvider.requestaboutusData(this.aboutusDataObj).subscribe((res) => {

      if (res.success == true) {
        this.ct = res.data;
      } else {
        console.log(res.message);
      }

    }, (error) => {
      console.log("Error : ", error);
    })



  }

  notificationDetails() {
    // this.navCtrl.setRoot('NotificationOnePage');
    this.navCtrl.navigateForward('NotificationOnePage')
  }

  ionViewDidLoad() {

    this.dv_statusObj = {
      "deliveryboy_id": localStorage.getItem("user-id")
    }


    this._frontendServiceProvider.getDeliveryBoyLatLong(this.dv_statusObj).subscribe((res) => {

      if (res.success == true) {
        if (res.data.isBlock == true) {
          this.createAlert()
        }
      } else {
        console.log(res.message);
      }

    }, (error) => {
      console.log("Error : ", error);
    })
    console.log('ionViewDidLoad AboutUsPage');
  }

  async openPopover(myEvent) {

    let popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });
    await popover.present();
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
  ngOnDestroy() {
    this.notification_timer.unsubscribe();
  }



}


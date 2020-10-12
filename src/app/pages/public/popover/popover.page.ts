import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
  user_email:any;	
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
       this.user_email = localStorage.getItem('user-email');
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad PopoverPage');
    }
    close() {
      this.popoverCtrl.dismiss();
    }
    
    
    change_profile() {
      alert('profile changed popover page');
      // this.navCtrl.setRoot('ChangeProfilePage');
      this.navCtrl.navigateForward('ChangeProfilePage');
    }
}

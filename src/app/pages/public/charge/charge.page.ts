import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { FrontendServiceProvider } from 'src/app/frontend-service/frontend.service';
import { Observable, interval } from 'rxjs';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage {
	notification_timer:any;
	ct:any = {};	
	chargeDataObj:object = {};
    notification_count:any = localStorage.getItem('noti_count');
  constructor(public navCtrl: NavController, public navParams: NavParams,private _frontendServiceProvider:FrontendServiceProvider,public popoverCtrl: PopoverController) {
	  
	  this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
	 if(res.success == true) {  this.notification_count = res.count_data; localStorage.setItem('noti_count',res.count_data); } else { console.log(res.message); } },(error) => { console.log("Error : ",error); })
	  

           /* Notification Timer Start */
					this.notification_timer = interval(5000).subscribe((val) => { 
					
							  this._frontendServiceProvider.fetchNotificationData().subscribe((res) => {
							 if(res.success == true) {  this.notification_count = res.count_data;  } else { console.log(res.message); } },(error) => { console.log("Error : ",error); })
					
					
					});					
	     /* Notification Timer End */
  
  }
  
  
  ngOnInit() {
	    
	   
	   this.chargeDataObj = {
					"customer_id" : localStorage.getItem('user-id'),
					"id" : localStorage.getItem('order-id')
				}
	   
	   this._frontendServiceProvider.requestChargeData(this.chargeDataObj).subscribe((res) => {
			
					 if(res.success == true) {
						 this.ct = res.data;						 
					  } else {
                        console.log(res.message);
					  }
				 
					  },(error) => {
					 console.log("Error : ",error);
             })
	   
  }
  
   notificationDetails() {
   this.navCtrl.navigateForward('NotificationOnePage'); 
 }
  
  gotonextpage() {
	  this.navCtrl.navigateForward('DeliveryBoyListPage');
  }
	  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChargePage');
  }
  
  async openPopover(myEvent) {
	
    let popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });
    await popover.present();
  }
  
  
  ngOnDestroy() {
   this.notification_timer.unsubscribe();
  }

}

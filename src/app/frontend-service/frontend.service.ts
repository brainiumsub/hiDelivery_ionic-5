import { Injectable } from '@angular/core';
import { LoadingController} from 'ionic-angular';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CONFIG } from '../../config';




@Injectable()
export class FrontendServiceProvider {
  url_str:any = {};
  loader:any;
  notificationDataObj:object = {};
  constructor(public _http: Http,public loadingCtrl: LoadingController) {
    console.log('Hello FrontendServiceProvider Provider');
  }
  
  
   showLoader(){
    this.loader = this.loadingCtrl.create({
        content: "Please wait...",
      });
    this.loader.present();
  }

  dismissLoader(){
    this.loader.dismiss();
  }

	
	requestLogin(value):Observable<any>{
    let url = CONFIG.API_ENDPOINT+'frontendapi/frontend_login';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }

   requestRegister(value):Observable<any>{
		
    let url = CONFIG.API_ENDPOINT+'frontendapi/frontend_register';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }

  forgotPassword(value):Observable<any>{
		
    let url = CONFIG.API_ENDPOINT+'frontendapi/frontend_forgot_password';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  
   signatureImageUpload(value):Observable<any>{
    let url = CONFIG.API_ENDPOINT+'frontendapi/signature_image_upload';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }

  
 
   requestChangePassword(value):Observable<any>{
	
	
	
	if(value.user_type == 'customer') { 
        this.url_str = 'change_password';
    } else {  this.url_str = 'change_password_delivery';  }	
	
	let url = CONFIG.API_ENDPOINT+'frontendapi/'+this.url_str;	

    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  
  requestProfileData(value):Observable<any>{
	
    let url = CONFIG.API_ENDPOINT+'frontendapi/customer_profile_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
   requestChangeProfileUpdate(value):Observable<any>{
	
    let url = CONFIG.API_ENDPOINT+'frontendapi/customer_profile_update_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  addParceldata(value):Observable<any>{
	
    let url = CONFIG.API_ENDPOINT+'frontendapi/add_parcel_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  requestChargeData(value):Observable<any>{
	
    let url = CONFIG.API_ENDPOINT+'frontendapi/request_charge_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  requestChangeStatus(value):Observable<any>{
	
    let url = CONFIG.API_ENDPOINT+'frontendapi/request_change_status_delivery_boy';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
 sendParcelRequest(value):Observable<any>{  
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_id_update_in_order';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
 /* requestDeliveryBoyData():Observable<any> {
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_data_for_map';	   
    return this._http.get(url).map((response:Response)=><any>response.json()).catch((error) => error.message);
  } */
  
  
 requestDeliveryBoyData(value):Observable<any>{   	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_data_for_map';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  

  
   fetchRequestData(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_request_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  acceptDeclineData(value):Observable<any>{  
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_accept_decline';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  fetchCofirmOrderData(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_confirm_order_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
   fetchCofirmOrderDataCompleted(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_confirm_order_data_completed';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  fetchOrderDataCustomer(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/customer_order_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  fetchOrderDetailCustomer(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/customer_order_details';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  
  updateLatLongDeliveryboy(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/utility_update';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  orderStatusChangeObjData(value):Observable<any>{
    	   
    let url = CONFIG.API_ENDPOINT+'frontendapi/delivery_boy_order_status_change';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  requestPayment(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/payment';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  fetchNotificationData():Observable<any>{

          this.notificationDataObj = {
                    "user_id":localStorage.getItem('user-id'),
                    "user_type":localStorage.getItem('user-type')           		
				}
				
			
    let url = CONFIG.API_ENDPOINT+'frontendapi/fetch_notification_data';
    var data = JSON.stringify(this.notificationDataObj);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  

  

  notificationDelete(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/notification_delete';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  requestaboutusData(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/about_us';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  requestpriceData(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/request_price';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
   requestDeliveryBoydata(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/request_deliveryboy_data';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
   requestCashonDeliverydata(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/request_cashon_delivery';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
   getDeliveryBoyLatLong(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/get_delivery_boy_lat_long';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  removeDvLatLong(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/remove_dv_lat_long';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  orderDelete(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/order_delete';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  requestDeviceTokenData(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/update_device_token_dlv';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  
  requestDeviceTokenCustomerData(value):Observable<any>{
   let url = CONFIG.API_ENDPOINT+'frontendapi/update_device_token_customer';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }
  
  /* notificationDelete(_user):Observable<any>{
    let url = CONFIG.API_ENDPOINT+'frontendapi/notification_delete/'+_user; 
    return this._http.delete(url).map((response:Response)=><any>response.json()).catch((error) => error.message);
  } */

}

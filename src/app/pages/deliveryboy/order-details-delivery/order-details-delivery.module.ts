import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsDeliveryPageRoutingModule } from './order-details-delivery-routing.module';

import { OrderDetailsDeliveryPage } from './order-details-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsDeliveryPageRoutingModule
  ],
  declarations: [OrderDetailsDeliveryPage]
})
export class OrderDetailsDeliveryPageModule {}

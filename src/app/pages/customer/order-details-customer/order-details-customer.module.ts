import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsCustomerPageRoutingModule } from './order-details-customer-routing.module';

import { OrderDetailsCustomerPage } from './order-details-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsCustomerPageRoutingModule
  ],
  declarations: [OrderDetailsCustomerPage]
})
export class OrderDetailsCustomerPageModule {}

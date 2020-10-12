import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryBoyListPageRoutingModule } from './delivery-boy-list-routing.module';

import { DeliveryBoyListPage } from './delivery-boy-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryBoyListPageRoutingModule
  ],
  declarations: [DeliveryBoyListPage]
})
export class DeliveryBoyListPageModule {}
